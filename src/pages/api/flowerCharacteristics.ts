import { NextApiRequest, NextApiResponse } from 'next';
import { createConnection } from 'mysql2/promise';
import { config } from 'dotenv';

config();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { item_id } = req.query;
  console.log("TEST", item_id);

  const connection = await createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "your_database_name",
  });

  try {
    const [rows] = await connection.execute(
      'SELECT * FROM Flowers WHERE item_id = ?',
      [item_id]
    );

    if (rows.length > 0) {
      const flower = rows[0];
      res.status(200).json(flower);
      console.log("FLOWER", flower); 
    } else {
      res.status(404).json({ message: 'Flower not found' });
    }
  } catch (error) {
    console.error('Error retrieving flower characteristics:', error);
    res.status(500).json({ message: 'Server error' });
  } finally {
    connection.end();
  }
}
