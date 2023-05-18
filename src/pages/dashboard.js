import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import { Container, Header, Card, Button } from "semantic-ui-react";
import Link from "next/link";

function Dashboard() {
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [items, setItems] = useState([]);
    const [balance, setBalance] = useState(0);
    const router = useRouter();

    function handleLogout() {
        fetch("/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                document.cookie =
                    "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                router.push("/");
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    }

    useEffect(() => {
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
            "$1"
        );

        const decodedToken = jwt.decode(token);

        const username = decodedToken?.username;
        const userId = decodedToken?.user_id;

        setUsername(username);
        setUserId(userId);
    }, []);

    useEffect(() => {
        if (userId) {
            fetchItems(userId);
        }
    }, [userId]);

    async function fetchItems(userId) {
        try {
            const response = await fetch(`/api/UserInventory/${userId}`);
            const data = await response.json();

            const itemsWithCharacteristics = await Promise.all(
                data.items.map(async (item) => {
                    if (item.category === "flower") {
                        const response = await fetch(
                            `/api/flowerCharacteristics?item_id=${item.item_id}`
                        );
                        const flower = await response.json();
                        console.log("Flower Characteristics:", flower);
                        return {
                            ...item,
                            flower,
                        };
                    } else {
                        return item;
                    }
                })
            );

            setItems(itemsWithCharacteristics);
            setBalance(data.balance);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    }

    function handleShopRedirect() {
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
            "$1"
        );
        router.push(`/shop?token=${token}`);
    }

    return (
        <Container>
            <div style={{ marginTop: "2rem" }}>
                <Header as="h1" style={{ marginBottom: "1rem" }}>
                    Bienvenue,{" "}
                    <span style={{ color: "#e00e4a" }}>{username}</span>
                </Header>
            </div>
            <Card>
                <Card.Content>
                    <Card.Header>Utilisateur: {username}</Card.Header>
                    <Card.Meta>Numéro de compte: {userId}</Card.Meta>
                </Card.Content>
            </Card>
            <h3 style={{ marginTop: "2rem" }}>Objets dans l'inventaire :</h3>
            {items.map((item) => {
                if (item.category === "flower" && item.flower) {
                    const flower = item.flower;
                    return (
                        <div key={item.user_inventory_id}>
                            <h3>Item Name: {flower.item_name}</h3>
                            <p>HP: {flower.hp}</p>
                            <p>Level: {flower.level}</p>
                            <p>XP: {flower.xp}</p>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
            <div style={{ marginTop: "2rem" }}>
                <h3>Solde moonflowers: {balance} MF</h3>
            </div>
            <div style={{ marginTop: "2rem" }}>
                <Button className="ui button">
                    <Link href="/shop">Magasin</Link>
                </Button>
                <Button className="ui button" onClick={handleLogout}>
                    Se déconnecter
                </Button>
            </div>
        </Container>
    );
}

export default Dashboard;
