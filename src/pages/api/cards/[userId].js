import { NextApiRequest, NextApiResponse } from "next";
import { createConnection } from "mysql2/promise";
import { config } from "dotenv";
config();

export default async function cards(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { userId } = req.query;

    try {
        const connection = await createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

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
