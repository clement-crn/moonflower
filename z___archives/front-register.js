import { useState } from "react";
import { Form, Message } from "semantic-ui-react";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

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
            setMessage("Failed to add user, please try again");
        }
    };

    return (
        <Form
            onSubmit={handleSubmit}
            success={message === "User added successfully!"}
            error={!!message && message !== "User added successfully!"}
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
