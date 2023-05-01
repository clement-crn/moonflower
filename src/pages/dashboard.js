import React, { useEffect, useState } from "react";
import Router from "next/router";
import jwt from "jsonwebtoken";
import { Container, Header, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function Dashboard() {
    const [username, setUsername] = useState("");
    const [data, setData] = useState([]);

    function handleLogout() {
        document.cookie =
            "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

        Router.push("/");
    }

    useEffect(() => {
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
            "$1"
        );

        const decodedToken = jwt.decode(token);

        const username = decodedToken?.username;

        setUsername(username);

        // Example API request
        const fetchData = async () => {
            try {
                const response = await fetch("/api/dashboard");
                const data = await response.json();
                setData(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <Container>
            <Header as="h1">Dashboard de test</Header>
            {username && <p>nom d'utilisateur: {username}</p>}
            <button className="ui button" onClick={handleLogout}>
                se déconnecter
            </button>

            <Header as="h2">Dashboard data</Header>
        </Container>
    );
}

export default Dashboard;
