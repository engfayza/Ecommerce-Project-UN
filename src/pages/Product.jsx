import React, { useState, useEffect } from "react";
import products from "../components/SingleProduct";
import { Link, useParams } from "react-router-dom";
import "../styles/Productt.css";
import CounterWithCart from "../components/CounterWithCart";

function Product() {
  const { id } = useParams();
  console.log('ID from useParams:', id);  // Check if ID is coming from params

  // Convert id to a number
  const productId = parseInt(id, 10);
  console.log('Parsed Product ID:', productId);  // Check the parsed ID

  // Verify products is an array
  console.log('Products:', products);  // Ensure products is an array

  // Find the product with the given id
  const product = products && Array.isArray(products) ? products.find((p) => p.id === productId) : undefined;
  console.log('Found Product:', product);  // Check if product is found

  // Handle cases where product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  const defaultSize =
    product && product.size && product.size.length > 0 ? product.size[0] : null;
  const defaultColor =
    product && product.colors && product.colors.length > 0 ? product.colors[0] : null;

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  return (
    <div>
      <div className="productNav1">
        <p>
          <Link to="/">Home</Link>
          <span>{">"}</span>
          <Link to="/shop">Shop</Link>
          <span>{">"}</span>
          <span className="productNameSpan1">{product.name}</span>
        </p>
      </div>
      <div className="productDetails1">
        <div className="productPicture1">
          <img src={product.picture} alt={product.name} />
        </div>

        <div className="productInformations1">
          <h2>{product.name}</h2>
          <p className="productPrice1">{product.cost}$</p>
          <p className="productDescription1">{product.description}</p>
         
         
          <CounterWithCart
            product={product}   />
           </div>
      </div>
    </div>
  );
}

export default Product;
