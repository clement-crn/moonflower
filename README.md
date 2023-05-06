## Présentation de la v1.0

MoonFlower est un jeu de gestion que nous avons imaginé avec une partie de ma communauté discord.
Mon rôle est de m'occuper de l'intégralité du code.

-système d'authentification avec hash des mots de passe vers la ddb mySQL (next route api + page front)

-création de session avec un JsonWebToken sauvegardé dans les cookies

-Affichage de l'username récupéré sur le cookie + bouton logout

## L'architecture mySQL

![Capture d’écran 2023-04-30 à 21 43 49](https://user-images.githubusercontent.com/86530475/236632852-af09c2c3-c08d-4244-92cf-5151acdd1f6a.png)

```
CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  session_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE cards (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  level INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE shop (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);




```

## Lancer le projet

Générer une clé privée pour la signature JWT:

```
//node.js
const crypto = require('crypto');

const jwtSecret = crypto.randomBytes(64).toString('hex');
console.log(jwtSecret);

```

```
node token.js
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
