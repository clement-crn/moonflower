import { NextApiRequest, NextApiResponse } from "next";
import { createConnection } from "mysql2/promise";
import { config } from "dotenv";
config();

interface ShopItem {
  item_id: number;
  name: string;
  price: number;
}

interface PlayerInventoryItem {
  id: number;
  name: string;
  level: number;
  price: number;
}

export default async function buy(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { userId, selectedItemId, balance } = req.body;

  try {
    const connection = await createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

  
    const [shopItems] = await connection.execute<ShopItem[]>(
      "SELECT * FROM shop WHERE item_id = ?",
      [selectedItemId]
    );

    if (shopItems.length === 0) {
      console.log("Item not found in the shop");
      return res.status(404).json({ message: "Item introuvable" });
    }

    const shopItem = shopItems[0];
    console.log("Shop Item:", shopItem);


    if (balance < shopItem.price) {
      console.log("Solde insuffisant");
      return res.status(400).json({ message: "Solde insuffisant" });
    }


    await connection.beginTransaction();

    const updatedBalance = balance - shopItem.price;
    console.log("solde du joueur updated:", updatedBalance);
    await connection.execute(
      "UPDATE users SET balance = ? WHERE user_id = ?",
      [updatedBalance, userId]
    );


    console.log("supprime l'item du magasin");
    await connection.execute("DELETE FROM shop WHERE item_id = ?", [
      selectedItemId,
    ]);

  
    console.log("ajoute l'item dans l'inventaire");
    await connection.execute(
      "INSERT INTO player_inventory (user_id, item_id, name, level, price) VALUES (?, ?, ?, ?, ?)",
      [userId, selectedItemId, shopItem.name, shopItem.level, shopItem.price]
    );

 
    const updatedQuantity = shopItem.quantity - 1;
    console.log("Mise à jour de la quantité disponible dans le magasin");
    await connection.execute(
      "UPDATE shop SET quantity = ? WHERE item_id = ?",
      [updatedQuantity, selectedItemId]
    );


    console.log("Committing the transaction");
    await connection.commit();
    connection.end();

    console.log("Purchase successful");
    return res.status(200).json({ message: "Purchase successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error making the purchase" });
  }
}
