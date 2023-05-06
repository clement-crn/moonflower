import { NextApiRequest, NextApiResponse } from "next";
import { createConnection } from "mysql2/promise";
import { config } from "dotenv";
import jwt from "jsonwebtoken";

config();

export default async function cards(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const token = req.headers.authorization?.split(" ")[1]; // Retrieve the JWT token from the request headers

  try {
    // Verify and decode the JWT token to get the user_id
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.user_id;

    // Create a MySQL connection
    const connection = await createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Fetch the cards for the logged-in user
    const [result] = await connection.execute(
      "SELECT * FROM cards WHERE user_id = ?",
      [userId]
    );

    connection.end();

    return res.status(200).json({ cards: result });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error retrieving cards" });
  }
}
