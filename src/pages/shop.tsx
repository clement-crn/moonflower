import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import { Container, Header, Card, Button } from "semantic-ui-react";
import Link from "next/link";

function Shop() {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [items, setItems] = useState([]);
  const [shopItems, setShopItems] = useState([]);
  const [balance, setBalance] = useState(0);
  const router = useRouter();

  const [selectedItems, setSelectedItems] = useState({
    shop: [],
    userInventory: [],
  });

 

  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    const decodedToken = jwt.decode(token);

    const username = decodedToken?.username;
    const userId = decodedToken?.user_id;

    setUsername(username);
    setUserId(userId);
  }, []);

  useEffect(() => {
    if (userId) {
      fetchItems(userId);
    }
  }, [userId]);

  async function fetchItems(userId) {
    try {
      const userInventoryResponse = await fetch(`/api/UserInventory/${userId}`);
      const userInventoryData = await userInventoryResponse.json();

      const shopInventoryResponse = await fetch("/api/Shop/shopInventory");
      const shopInventoryData = await shopInventoryResponse.json();
      const shopItemsWithPrices = shopInventoryData.shop.map((item) => ({
      ...item,
      price: parseFloat(item.price)
    }));
      setShopItems(shopInventoryData.shop);

      const itemsWithCharacteristics = await Promise.all(
        userInventoryData.items.map(async (item) => {
          if (item.category === "flower") {
            const response = await fetch(
              `/api/flowerCharacteristics?item_id=${item.item_id}`
            );
            const flower = await response.json();
            console.log("Flower Characteristics:", flower);
            return {
              ...item,
              flower,
            };
          } else {
            return item;
          }
        })
      );

      setItems(itemsWithCharacteristics);
      setBalance(userInventoryData.balance);
      console.log("Shop Inventory:", shopInventoryData.shop);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }

  const handleItemSelection = (item, category) => {
    if (typeof item.price === "string") {
      item.price = parseFloat(item.price);
    }

    if (category === "shop") {
      if (selectedItems.userInventory.length === 0) {
        if (selectedItems.shop.includes(item)) {
          setSelectedItems((prevSelectedItems) => ({
            ...prevSelectedItems,
            shop: prevSelectedItems.shop.filter(
              (selectedItem) => selectedItem !== item
            ),
          }));
        } else {
          const totalPriceWithoutItem = selectedItems.shop.reduce(
            (total, selectedItem) => total + selectedItem.price,
            0
          );

          const newTotalPrice = totalPriceWithoutItem + item.price;

          if (newTotalPrice <= balance) {
            setSelectedItems((prevSelectedItems) => ({
              ...prevSelectedItems,
              shop: [...prevSelectedItems.shop, item],
            }));
          }
        }
      }
    } else if (category === "userInventory") {
      if (selectedItems.shop.length === 0) {
        if (selectedItems.userInventory.includes(item)) {
          setSelectedItems((prevSelectedItems) => ({
            ...prevSelectedItems,
            userInventory: prevSelectedItems.userInventory.filter(
              (selectedItem) => selectedItem !== item
            ),
          }));
        } else {
          setSelectedItems((prevSelectedItems) => ({
            ...prevSelectedItems,
            userInventory: [...prevSelectedItems.userInventory, item],
          }));
        }
      }
    }
  };

  return (
    <Container>
      <div style={{ marginTop: "2rem" }}>
        <Header as="h1" style={{ marginBottom: "1rem" }}>
          Bienvenue,{" "}
          <span style={{ color: "#e00e4a" }}>{username}</span>
        </Header>
      </div>
      {/* Render user info card */}
      <Card>
        <Card.Content>
          <Card.Header>Utilisateur: {username}</Card.Header>
          <Card.Meta>Numéro de compte: {userId}</Card.Meta>
        </Card.Content>
      </Card>

      <h3 style={{ marginTop: "2rem" }}>
        Objets disponibles dans le magasin :
      </h3>
      <div style={{ backgroundColor: "#e3e6fa", padding: "1rem" }}>
      
        <Card.Group>
          {shopItems.map((item) => (
            <Card
              key={item.shop_inventory_id}
              onClick={() => handleItemSelection(item, "shop")}
              style={{
                border: selectedItems.shop.includes(item)
                  ? "3px solid black"
                  : "none",
              }}
            >
              <Card.Content>
                <Card.Header>Item ID: {item.item_id}</Card.Header>
                <Card.Meta>Categorie: {item.category}</Card.Meta>
                <Card.Description>Quantite: {item.quantity}</Card.Description>
                <Card.Description style={{ color: "#0000FF" }}>
                  Price: {item.price}
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>

      <h3 style={{ marginTop: "2rem" }}>
        Objets dans l'inventaire du joueur :
      </h3>
      <div style={{ backgroundColor: "#c1dcd1", padding: "1rem" }}>
  
        <Card.Group>
          {items.map((item) => (
            <Card
              key={item.item_id}
              onClick={() => handleItemSelection(item, "userInventory")}
              style={{
                border: selectedItems.userInventory.includes(item)
                  ? "3px solid black"
                  : "none",
              }}
            >
              <Card.Content>
                <Card.Header>Item ID: {item.item_id}</Card.Header>
                <Card.Meta>Category: {item.category}</Card.Meta>
                <Card.Description>Quantity: {item.quantity}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Solde moonflowers: {balance} MF</h3>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>
          Total:{" "}
          {selectedItems.shop.reduce(
            (total, item) => total + item.price,
            0
          ) +
            selectedItems.userInventory.reduce(
              (total, item) => total + item.price,
              0
            )}
        </h3>
      </div>
    </Container>
  );
}

export default Shop;