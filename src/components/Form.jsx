/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Form({ handleItems }) {
  const [name, setName] = useState("");
  const [num, setNum] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newObject = { name, quantity: num, checked: false, id: Date.now() };
    handleItems(newObject);

    setName("");
    setNum(1);
    console.log(newObject);
  }

  const quantityNum = [...Array(15)].map((item, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select value={num} onChange={(e) => setNum(Number(e.target.value))}>
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}
