import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItem) => {
    setItems(newItem);
    localStorage.setItem("shoppinglist", JSON.stringify(newItem));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItems = {
      id,
      checked: false,
      item,
    };
    const listItems = [...items, myNewItems];
    setAndSaveItems(listItems);
  };

  const handleChange = (id) => {
    const listItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        hadleSubmit={hadleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        handleChange={handleChange}
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
