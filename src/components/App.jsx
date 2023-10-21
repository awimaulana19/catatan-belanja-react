/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

function App() {
  const [items, setItems] = useState(groceryItems);

  function handleItems(item) {
    setItems([...items, item]);
  }

  function deleteItems(id) {
    setItems(items.filter((item) => item.id != id));
  }

  function deleteAllItems() {
    setItems([]);
  }

  function toogleItems(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <Form handleItems={handleItems} />
      <GroceryList
        items={items}
        deleteItems={deleteItems}
        deleteAllItems={deleteAllItems}
        toogleItems={toogleItems}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
