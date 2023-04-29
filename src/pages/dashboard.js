import React, { useEffect, useState } from "react";
import Router from "next/router";
import jwt from "jsonwebtoken";

function Dashboard() {
    const [username, setUsername] = useState("");

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
    }, []);

    return (
        <div>
            <h1>Dashboard de test</h1>
            {username && <p>nom d'utilisateur: {username}</p>}
            <button onClick={handleLogout}>se déconnecter</button>
        </div>
    );
}

export default Dashboard;
