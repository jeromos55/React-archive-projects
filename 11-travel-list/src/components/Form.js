import { useState } from "react";

export default function Form({ addItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantitiy] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    addItems(newItem);
    setDescription("");
    setQuantitiy(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>
        What do you need for your{" "}
        <span role="img" aria-label="Smile love">
          😍
        </span>{" "}
        trip?
      </h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantitiy(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        input="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
