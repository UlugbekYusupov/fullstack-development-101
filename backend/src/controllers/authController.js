import users from "../data/db.js"
import bcrypt from "bcrypt"
import generateId from "../utils/generateId.js"

export async function register(req, res) {
    try {
        const {username, email, password} = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({"message": "No data"})
        }
        const existingUser = users.find((user) => user.email === email);
        if (existingUser) {
            return res.status(409).json({"message": "user already exist"})
        }
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = {
            id: generateId(users),
            username,
            email,
            password: passwordHash
        }
        users.push(newUser)
        return res.status(201).json({"message": "Successfully registered new user"+newUser.toString()})
    }catch(err){
        return res.status(500).json({"message": "Something went wrong"+err.toString()})
    }
};
export async function login(req,res){
    const {username, password} = req.body();
    if(!username || !password)     return res.status(400).json({"message": "No data"});
    const existingUser = users.find((user) => user.username === username);
    if(!existingUser) return res.status(400).json({"message": "User does not exist, register before"})
    if(! await bcrypt.compare(bcrypt.hash(password), existingUser.password)) return res.status(401).json({"message": "Wrong password"})
};