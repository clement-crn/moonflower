
import { NextApiRequest, NextApiResponse } from "next";
import { createConnection } from "mysql2/promise";
import { config } from "dotenv";
config();

interface ShopItem {
  shop_inventory_id: number;
  item_id: string;
  category: number;
  quantity:number;
}

export default async function shopInventory(req: NextApiRequest, res: NextApiResponse) {
  try {
    const connection = await createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [shopItems] = await connection.execute<ShopItem[]>(`
      SELECT * from ShopInventory
    `);
    
    connection.end();

    return res.status(200).json({ shop: shopItems });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Error retrieving shop items", error: err });
  }
}
