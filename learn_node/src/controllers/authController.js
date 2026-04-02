import users from "../data/db.js";
import generateid from "../utils/generateid.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const JWT_SECRET_KEY = "something to someone"

// register

export async function register(req, res) {
    // try function to catch errors while function is running if we get any unexpected error
    try {
        // get datas from request body
        const{username, email,password} = req.body;
        if(!username || !email || !password){
            res.status(400).json({error: 'Provide valid credentials'});
        }
        const existingUser = users.find(user => user.email === email);
        if(existingUser){
        return res.status(409).json({error: 'User already exists'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: generateid(users),
            username, email,
            password: hashedPassword
        }
        users.push(newUser);
        return res.status(201).json({ message: "User registered successfully!"});
    } catch (error) {
        return res.status(500).json({error: 'Internal error'});
    }

}
export async function login(req, res) {
    const {email, password} = req.body

    if (!email || !password) {
        return res.status(400).json({ error: 'Provide valid credentials' });
    }
    const existingUser = users.find((user) => user.email == email);
    if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
        return res.status(401).json({ error: 'Invalid password' });
    }
    const token = jwt.sign({ email, id: existingUser.id }, JWT_SECRET_KEY, { expiresIn: '1d' });
    return res.status(200).json({ message: "Login successful!", token });
}