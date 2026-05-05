import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

import { users } from "../data/db.js";

const JWT_SECRET_KEY = "techhousebackendsecretkey";

export async function register(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Provide valid credentials!" });
    }
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return res.status(409).json({ message: "Email already exist" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = {
      id: uuidv4(),
      username,
      email,
      password: passwordHash,
    };

    users.push(newUser);
    return res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Error", error: err });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Fields are required!" });
    }
    const existingUser = users.find((user) => user.email === email);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found!" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid password!" });
    }

    const token = jwt.sign({ email, id: existingUser.id }, JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .json({ message: "Login successful", token, user: existingUser });
  } catch (err) {
    return res.status(500).json({ message: "Internal Error", error: err });
  }
}
