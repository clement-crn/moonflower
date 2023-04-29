import { useState, useEffect } from "react";
import { Form, Message } from "semantic-ui-react";
import jwt from "jsonwebtoken";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const token = document.cookie.split("=")[1];
        if (token) {
            const decoded = jwt.decode(token);
            setUsername(decoded.username);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            console.error(error);
            setMessage("Veuillez reessayer");
        }
    };

    return (
        <Form
            onSubmit={handleSubmit}
            success={message === "utilisateur ajouté"}
            error={!!message && message !== "utilisateur ajouté"}
        >
            <Form.Input
                label="Nouveau login"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <Form.Input
                label="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Input
                label="Nouveau mot de passe"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <Message success header="Success" content={message} />
            <Message error header="Error" content={message} />
            <Form.Button>S'inscrire</Form.Button>
        </Form>
    );
}
