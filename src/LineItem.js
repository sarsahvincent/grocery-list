import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function LineItem({ item, handleChange, handleDelete }) {
  return (
    <li className="item" >
      <input
        type="checkbox"
        name="tiem"
        checked={item.checked}
        onChange={() => handleChange(item.id)}
      />
      <label
        onDoubleClick={() => handleChange(item.id)}
        style={item.checked ? { textDecoration: "line-through" } : null}
      >
        {item.item}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
}

export default LineItem;
