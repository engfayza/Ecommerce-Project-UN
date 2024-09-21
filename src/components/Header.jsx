import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import CartDropdown from './CartDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart}   from '@fortawesome/free-solid-svg-icons';






function Header() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const updateCartItems = () => {
      const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedCartItems);
    };

    updateCartItems();
    window.addEventListener("storage", updateCartItems);
    return () => window.removeEventListener("storage", updateCartItems);
  }, []);

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo Furniro" className="logoImg" />
        <h1 className="logoText">Furniro</h1>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>

      <div className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={toggleMenu}>
              Shop
            </Link>
          </li>
         
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
        <ul className="mobile-rightLinks">
          <li>
            <div className="cart-container">
            <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </li>
        </ul>
      </div>

      <ul className="navLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <ul className="rightLinks">
          <li>
            <div className="cart-container">
            <FontAwesomeIcon icon={faShoppingCart} />
            <CartDropdown
              cartItems={cartItems}
              onRemove={handleRemoveFromCart}
            />
           </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
