import React from "react";
import LineItem from "./LineItem";

function ItemList({ items, handleChange, handleDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
        key={item.id}
          item={item}
          handleDelete={handleDelete}
          handleChange={handleChange}
        />
      ))}
    </ul>
  );
}

export default ItemList;
