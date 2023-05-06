import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { createConnection } from "mysql2/promise";
import bcrypt from "bcryptjs";
import { config } from "dotenv";
config();


export default async function login(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "methode impossible" });
  }

  const { username, password } = req.body;

  try {
    const connection = await createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    

    const [result] = await connection.execute(
      "SELECT user_id, username, password FROM users WHERE username = ?",
      [username]
    );

    if (result.length > 0) {
      const user = result[0];

      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign(
          { user_id: user.user_id, username: user.username },
          process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        
        

        res.setHeader("Set-Cookie", `token=${token}; path=/`);

        return res.status(200).json({ message: "CONNECTÉ" });
      } else {
        return res.status(401).json({ message: "MAUVAIS IDENTIFIANTS" });
      }
    } else {
      return res.status(401).json({ message: "MAUVAIS IDENTIFIANTS" });
    }

    connection.end();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "ECHEC" });
  }
}