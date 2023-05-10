import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { Container, Header, Table } from "semantic-ui-react";
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
  const [userId, setUserId] = useState<number>(0);
  const [shopItems, setShopItems] = useState<Card[]>([]);
  const [playerInventory, setPlayerInventory] = useState<Card[]>([]);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    const decodedToken: any = jwt.decode(token);

    if (decodedToken && decodedToken.exp > Date.now() / 1000) {
      const username: string = decodedToken?.username;
      const userId: number = decodedToken?.user_id;

      setUsername(username);
      setUserId(userId);
      fetchShopItems();
      fetchPlayerInventory(userId);
      fetchBalance(userId);
    } else {
      router.push("/login");
    }
  }, [router]);

  async function fetchShopItems() {
    try {
      const response = await fetch("/api/shop");
      const data = await response.json();
      console.log("Shop Data:", data);
      setShopItems(data.shop);
    } catch (error) {
      console.error("Error fetching shop items:", error);
    }
  }

  async function fetchPlayerInventory(userId: number) {
    try {
      const response = await fetch(`/api/cards/${userId}`);
      const data = await response.json();
      setPlayerInventory(data.cards);
    } catch (error) {
      console.error("Error fetching player inventory:", error);
    }
  }

  async function fetchBalance(userId: number) {
    try {
      const response = await fetch(`/api/cards/${userId}`);
      const data = await response.json();
      setBalance(data.balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  }

  const [selectedItem, setSelectedItem] = useState<number>(0);

  const handleRowClick = (itemId: number) => {
    if (selectedItem === itemId) {
      setSelectedItem(0);
    } else {
      setSelectedItem(itemId);
    }
  };

  return (
    <Container>
      <Header as="h2">Bienvenue au magasin, {username}</Header>
  
      <Header as="h3">Magasin</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Nom</Table.HeaderCell>
            <Table.HeaderCell>Prix</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {shopItems.map((item) => (
            <Table.Row
              key={item.id}
              onClick={() => handleRowClick(item.id)}
              style={{
                background: selectedItem === item.id ? "#ede7e3" : "none",
              }}
            >
              <Table.Cell>{item.item_id}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
  
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
    </Container>
  );
  
}

export default Shop;

