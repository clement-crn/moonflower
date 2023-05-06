import { NextApiRequest, NextApiResponse } from "next";
import { createConnection } from "mysql2/promise";
import { config } from "dotenv";
config();

export default async function logout(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { user_id } = req.body;

  try {
    const connection = await createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });


    await connection.execute("UPDATE users SET session_id = NULL WHERE user_id = ?", [user_id]);

    connection.end();

    return res.status(200).json({ message: "Déconnexion réussie" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "ÉCHEC" });
  }
}
