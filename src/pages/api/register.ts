import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { createConnection } from "mysql2/promise";
import { config } from "dotenv";
config();
dotenv.config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { username, email, password } = req.body;

    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      const connection = await createConnection({
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
      });

      await connection.query(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [username, email, hashedPassword]
      );

      connection.end();

      res.status(200).json({ message: "utilisateur ajouté!" });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Impossible de s'inscrire, veuillez reessayer",
      });
    }
  } else {
    res.status(405).json({ message: "METHODE IMPOSSIBLE" });
  }
}

