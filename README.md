## Présentation de la v1.0

MoonFlower est un jeu de gestion que nous avons imaginé avec une partie de ma communauté discord.
Mon rôle est de m'occuper de l'intégralité du code.

-système d'authentification avec hash des mots de passe vers la ddb mySQL (next route api + page front)
-création de session avec un JsonWebToken sauvegardé dans les cookies
-Affichage de l'username récupéré sur le cookie + bouton logout

## L'architecture mySQL

```
CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50) NOT NULL,
password VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Lancer le projet

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
