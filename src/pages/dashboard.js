import React, { useEffect, useState } from "react";
import Router from "next/router";
import jwt from "jsonwebtoken";
import { Container, Header, Card, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Link from "next/link";

function Dashboard() {
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [cards, setCards] = useState([]);
    const [balance, setBalance] = useState(0);

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
                Router.push("/");
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    }

    //déclanché qu'une fois car dependency = []
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

    //à chaque fois que userId change, on execute fetchCards
    useEffect(() => {
        if (userId) {
            fetchCards(userId);
        }
    }, [userId]);

    async function fetchCards(userId) {
        try {
            const response = await fetch(`/api/cards/${userId}`);
            const data = await response.json();
            setCards(data.cards);
            setBalance(data.balance);
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    }

    function handleShopRedirect() {
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
            "$1"
        );
        Router.push(`/shop?token=${token}`);
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
            <h3 style={{ marginTop: "2rem" }}>Plantes dans l'inventaire :</h3>
            {cards && cards.length === 0 ? (
                <p>Vous n'avez pas de plantes.</p>
            ) : (
                <Card.Group>
                    {cards.map((card) => (
                        <Card key={card.id}>
                            <img
                                src="https://semantic-ui.com/images/avatar2/large/matthew.png"
                                wrapped
                                ui={false}
                            />
                            <Card.Content>
                                <Card.Header>{card.name}</Card.Header>
                                <Card.Meta>
                                    ID unique de la plante:{" "}
                                    <span style={{ color: " #16dcc7 " }}>
                                        {card.card_id}
                                    </span>
                                </Card.Meta>
                                <Card.Description>
                                    Niveau: {card.level}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            )}

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
