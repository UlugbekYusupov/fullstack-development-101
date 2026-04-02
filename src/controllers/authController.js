import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import users from "../data/db.js";
import generateId from "../utils/generateId.js";

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const existingUser = users.find(
      (user) => user.email === String(email).toLowerCase().trim(),
    );
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = {
      id: generateId(users),
      name,
      email: String(email).toLowerCase().trim(),
      passwordHash,
    };
    users.push(newUser);
    return res.status(201).json({
      message: "User registered successfully",
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    return res.status(500).json({ message: "Registration failed" });
  }
}
export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const user = users.find(
      (user) => user.email === String(email).toLowerCase(),
    );

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, "secretkey", {
      expiresIn: "1h",
    });
    return res.json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ message: "Login failed" });
  }
}
