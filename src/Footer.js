import React from "react";

function Footer({ length }) {
  return (
    <footer>
      {length >= 2 ? <p>{length} List Items</p> : <p>{length} List Item</p>}
    </footer>
  );
}

export default Footer;
