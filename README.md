## Présentation de la v1.0

MoonFlower est un jeu de gestion que nous avons imaginé avec une partie de ma communauté discord.
Mon rôle est de m'occuper de l'intégralité du code.

Le joueur possède des personnages sont forme de cartes.

FEATURES v1

-système d'authentification (register, login, logout) + sessions via mySQL.

-Lors de la creation du compte, un champion est donné pour démarrer. Si l'username est déjà pris, le compte ne peut être valide.

-dashboard avec la liste des plantes du joueur

-page shop (toujours en cours de build)

## L'architecture mySQL

![Capture d’écran 2023-05-06 à 17 19 16](https://user-images.githubusercontent.com/86530475/236633118-b481c1dd-bbc1-406d-a900-27ea38289d63.png)

```
-- Table "Items"
CREATE TABLE Items (
  item_id INT PRIMARY KEY AUTO_INCREMENT,
  item_name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  price INT NOT NULL
);

-- Table "Flower"
CREATE TABLE Flower (
  item_id INT PRIMARY KEY AUTO_INCREMENT,
  item_name VARCHAR(255) NOT NULL,
  hp INT NOT NULL,
  xp INT NOT NULL,
  level INT NOT NULL,
  price INT NOT NULL
);


-- Table "ShopInventory"
CREATE TABLE ShopInventory (
  shop_inventory_id INT PRIMARY KEY AUTO_INCREMENT,
  item_id INT NOT NULL,
  category VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (item_id) REFERENCES Items(item_id)
);

-- Table "UserInventory"
CREATE TABLE UserInventory (
  user_inventory_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  item_id INT NOT NULL,
  category VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
  FOREIGN KEY (item_id) REFERENCES Items(item_id)
);

-- Table "Trade"
CREATE TABLE Trade (
  trade_id INT PRIMARY KEY AUTO_INCREMENT,
  sender_id INT NOT NULL,
  receiver_id INT NOT NULL,
  item_id INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (sender_id) REFERENCES Users(user_id),
  FOREIGN KEY (receiver_id) REFERENCES Users(user_id),
  FOREIGN KEY (item_id) REFERENCES Items(item_id)
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
npm dev
```
