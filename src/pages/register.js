import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { Form, Message } from "semantic-ui-react";

function Register() {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
            "$1"
        );

        if (token) {
            const decoded = jwt.decode(token);
            if (decoded && decoded.username) {
                setUsername(decoded.username);
            }
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { username, email, password } = event.target.elements;

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username.value,
                    email: email.value,
                    password: password.value,
                }),
            });

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            console.error(error);
            setMessage("Veuillez réessayer");
        }
    };

    return (
        <div>
            <h1>Register Page</h1>
            {username && <p>Username: {username}</p>}
            <Form
                onSubmit={handleSubmit}
                success={message === "utilisateur ajouté!"}
                error={!!message && message !== "utilisateur ajouté!"}
            >
                <Form.Input label="Username" type="text" name="username" />
                <Form.Input label="Email" type="email" name="email" />
                <Form.Input label="Password" type="password" name="password" />
                <Message success header="Success" content={message} />
                <Message error header="Error" content={message} />
                <Form.Button>Register</Form.Button>
            </Form>
        </div>
    );
}

export default Register;
