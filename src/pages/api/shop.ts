


import { NextApiRequest, NextApiResponse } from "next";
import { createConnection } from "mysql2/promise";
import { config } from "dotenv";
config();

export default async function shop(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const connection = await createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [shopItems] = await connection.execute("SELECT * FROM shop");

    connection.end();

    return res.status(200).json({ shop: shopItems });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Error retrieving shop items", error: err });
  }
}

