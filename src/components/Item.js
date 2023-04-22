import React, {useState} from "react";

function Item({ name, category }) {
  const[addToCart, setAddToCart] = useState(false)
  const [buttonText, setButtonText] = useState("Add to Cart")
  const [buttonClass, setButtonClass] = useState("add")

  const liClass = addToCart? "in-cart" : ""

  function handleAddToCart() {
    setAddToCart((addToCart) => !addToCart)
    setButtonText((buttonText) => "Remove from Cart")
    setButtonClass(() => "remove")
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className={buttonClass}>{buttonText}</button>
    </li>
  );
}

export default Item
