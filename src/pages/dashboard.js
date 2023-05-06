import React, { useEffect, useState } from "react";
import Router from "next/router";
import jwt from "jsonwebtoken";
import { Container, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function Dashboard() {
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [cards, setCards] = useState([]);

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
        console.log(userId);
    }, []);

    useEffect(() => {
        if (userId) {
            fetchCards(userId);
        }
    }, [userId]);

    //fetch la liste des cartes depuis l'API Cards/[userid]
    async function fetchCards(userId) {
        try {
            const response = await fetch(`/api/cards/${userId}`);
            const data = await response.json();
            setCards(data.cards);
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    }

    return (
        <Container>
            <Header as="h1">Bienvenue, {username}</Header>
            <h2>Votre numéro de compte : {userId}</h2>
            <button className="ui button" onClick={handleLogout}>
                Se déconnecter
            </button>

            {/* Display the cards */}
            <h3>Vos cartes :</h3>
            {cards.map((card) => (
                <div key={card.id}>
                    <p>Card ID: {card.card_id}</p>
                    <p>Card Name: {card.name}</p>
                    <p>Niveau de la carte: {card.level}</p>
                </div>
            ))}
        </Container>
    );
}

export default Dashboard;
