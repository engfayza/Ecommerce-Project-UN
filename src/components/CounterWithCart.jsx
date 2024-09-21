import React, { useContext, useState } from "react";
import CartContext from "./CartContext";

function CounterWithCart({ product, selectedSize, selectedColor }) {
  const { addProduct } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      size: selectedSize,
      color: selectedColor ? [selectedColor] : [],
      quantity: count,
    };
    addProduct(productToAdd);
  };

  return (
    <div style={styles.container}>
      <div style={styles.counter}>
        <button style={styles.button} aria-label="Decrease quantity" onClick={handleDecrement}>-</button>
        <div style={styles.countDisplay}>{count}</div>
        <button style={styles.button} aria-label="Increase quantity" onClick={handleIncrement}>+</button>
      </div>
      <button style={styles.addButton} onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: "5vh",
  },
  counter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    border: "solid 1px #9F9F9F",
    borderRadius: "10px",
  },
  button: {
    fontSize: "30px",
    fontWeight: 500,
    border: "none",
    backgroundColor: "transparent",
    padding: "12px",
  },
  countDisplay: {
    fontSize: "22px",
    margin: "0 10px",
    fontWeight: 500,
    padding: "12px",
  },
  addButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "solid 1px black",
    borderRadius: "10px",
    fontSize: "24px",
    padding: "14px 30px",
    marginLeft: "2vw",
    cursor: "pointer",
  },
};

export default CounterWithCart;
