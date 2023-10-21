/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from './Item'

export default function GroceryList({
  items,
  deleteItems,
  deleteAllItems,
  toogleItems,
}) {
  const [sort, setSort] = useState("input");

  let sortItems = "";
  if (sort === "input") {
    sortItems = items;
  } else if (sort === "name") {
    sortItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "checked") {
    sortItems = items.slice().sort((a, b) => a.checked - b.checked);
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              deleteItems={deleteItems}
              toogleItems={toogleItems}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={deleteAllItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}
