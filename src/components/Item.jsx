/* eslint-disable react/prop-types */
export default function Item({ item, deleteItems, toogleItems }) {
    return (
      <li>
        <input
          checked={item.checked}
          onChange={() => toogleItems(item.id)}
          type="checkbox"
        />
        <span style={item.checked ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.name}
        </span>
        <button onClick={() => deleteItems(item.id)}>&times;</button>
      </li>
    );
  }