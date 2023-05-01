import { createConnection } from "mysql2/promise";

export default async function handler(req, res) {
    const connection = await createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    try {
        const [rows] = await connection.execute("SELECT * FROM my_table");

        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    } finally {
        connection.end();
    }
}
