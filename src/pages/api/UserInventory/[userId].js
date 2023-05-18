// item/[userId].js

import { NextApiRequest, NextApiResponse } from "next";
import { createConnection } from "mysql2/promise";
import { config } from "dotenv";
config();

export default async function itemByUserId(req, res) {
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

        const [itemResult, balanceResult] = await Promise.all([
            connection.execute(
                "SELECT * FROM UserInventory WHERE user_id = ?",
                [userId]
            ),
            connection.execute("SELECT balance FROM users WHERE user_id = ?", [
                userId,
            ]),
        ]);

        connection.end();

        const items = itemResult[0];
        const balance = balanceResult[0][0].balance;

        return res.status(200).json({ items, balance });
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ message: "Error retrieving items and balance" });
    }
}
