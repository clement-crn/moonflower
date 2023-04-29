import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { createConnection } from "mysql2/promise";
import bcrypt from "bcryptjs";

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body;

  try {
    const connection = await createConnection({
     
    });

    const [result] = await connection.execute(
      "SELECT id, username, password FROM users WHERE username = ?",
      [username]
    );

    if (result.length > 0) {
      const user = result[0];

      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        res.setHeader("Set-Cookie", `token=${token}; path=/`);

        return res.status(200).json({ message: "Logged in successfully" });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    connection.end();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to log in" });
  }
}
