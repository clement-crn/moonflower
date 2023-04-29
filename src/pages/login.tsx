import { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (document.cookie.includes("token")) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      router.push("/dashboard");
    } else {
      setErrorMessage("Mauvais identifiants");
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
        <Form.Input
          label="Login"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Input
          type="password"
          label="Mot de passe"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Se connecter</Button>
      </Form>
    </div>
  );
}

