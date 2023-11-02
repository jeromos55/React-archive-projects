import { useState } from "react";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";
import Logo from "./Logo";

export default function App() {
  const [items, setItems] = useState([]);

  function addItems(item) {
    setItems([...items, item]);
  }

  function onClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function onDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Logo />
      <Form addItems={addItems} />
      <PackingList
        items={items}
        onClearList={onClearList}
        onDeleteItem={onDeleteItem}
        toggleItem={toggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
