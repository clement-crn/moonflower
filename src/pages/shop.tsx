import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { Container, Header, Item, Table } from "semantic-ui-react";
import { useRouter } from "next/router";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import Link from "next/link";

interface Card {
  id: number;
  name: string;
  level: number;
}

function Shop() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [shopItems, setShopItems] = useState<Card[]>([]);
  const [playerInventory, setPlayerInventory] = useState<Card[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [selectedItemData, setSelectedItemData] = useState<Card | null>(null);

  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    const decodedToken: any = jwt.decode(token);

    if (decodedToken && decodedToken.exp > Date.now() / 1000) {
      const username: string = decodedToken?.username;

      setUsername(username);
      fetchShopItems();
      fetchPlayerInventory();
      fetchBalance();
    } else {
      router.push("/login");
    }
  }, [router]);

  async function fetchShopItems() {
    try {
      const response = await fetch("/api/shop");
      const data = await response.json();
      setShopItems(data.shop);
    } catch (error) {
      console.error("Error fetching shop items:", error);
    }
  }

  async function fetchPlayerInventory() {
    try {
      const response = await fetch("/api/player-inventory");
      const data = await response.json();
      setPlayerInventory(data.inventory);
    } catch (error) {
      console.error("Error fetching player inventory:", error);
    }
  }

  async function fetchBalance() {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      setBalance(data.balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  }

  const handleRowClick = (itemId: number) => {
    if (selectedItemId === itemId) {
      setSelectedItem(0);
      setSelectedItemId(null);
      setSelectedItemData(null);
    } else {
      setSelectedItem(itemId);
      setSelectedItemId(itemId);
      const selectedItem = shopItems.find((item) => item.id === itemId);
      setSelectedItemData(selectedItem || null);
    }
  };
  return (
    <Container>
      {selectedItemData && (
        <div>
          <h4>Panier:</h4>
          <p>Nom: {selectedItemData.name}</p>
          <p>Prix: {selectedItemData.price}</p>
          <p>ID de l'item: {selectedItemData.item_id}</p>
        </div>
      )}
  
      <Header as="h2">Bienvenue au magasin, {username}</Header>
  
      <Header as="h3">Magasin</Header>
      <div style={{ marginBottom: "1em" }}>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nom</Table.HeaderCell>
              <Table.HeaderCell>Prix</Table.HeaderCell>
              <Table.HeaderCell>Item ID</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {shopItems.map((item) => (
              <Table.Row
                key={item.id}
                onClick={() => handleRowClick(item.id)}
                style={{
                  background: selectedItemId === item.id ? "#ede7e3" : "none",
                }}
              >
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell>{item.item_id}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        {selectedItemId !== null && (
          <Button color="green" onClick={handleBuy}>
            Acheter
          </Button>
        )}
      </div>
  
      <Header as="h3">Inventaire</Header>
  
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nom</Table.HeaderCell>
            <Table.HeaderCell>Niveau</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {playerInventory.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.level}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
  
      <Button as={Link} href="/dashboard" color="blue">
        Tableau de bord
      </Button>
      <h2>Balance en moonflowers: {balance}</h2>
    </Container>
  );
  
          }
export default Shop;  