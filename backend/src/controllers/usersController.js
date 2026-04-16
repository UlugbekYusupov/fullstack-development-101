import { users } from "../data/db.js";

export async function getUsers(req, res) {
  try {
    return res.json({ users });
  } catch (error) {
    return res.status(500).json({ message: "Failed to retrieve users" });
  }
}
