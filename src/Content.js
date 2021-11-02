import React from "react";
import ItemList from "./ItemList";

function Content({ items, handleDelete, handleChange }) {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleDelete={handleDelete}
          handleChange={handleChange}
        />
      ) : (
        <h3>The List is currently empty</h3>
      )}
    </main>
  );
}

export default Content;
