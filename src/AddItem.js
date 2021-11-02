import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

function AddItem({ newItem, setNewItem, hadleSubmit }) {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={hadleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        ref={inputRef}
        type="text"
        id="addItem"
        autoFocus
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        onClick={() => inputRef.current.focus()}
        type="submit"
        aria-label="Add Item"
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItem;
