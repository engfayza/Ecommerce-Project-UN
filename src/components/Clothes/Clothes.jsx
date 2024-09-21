import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Button/Button';


function Clothes() {
  const [products, setProducts] = useState([]);

  // Function to fetch data from multiple URLs
  const fetchProducts = async () => {
    try {
      const [response1, response2] = await Promise.all([
        fetch("https://fakestoreapi.com/products/category/men's clothing"),
        fetch("https://fakestoreapi.com/products/category/women's clothing")
      ]);
      
      const [data1, data2] = await Promise.all([
        response1.json(),
        response2.json()
      ]);

      // Combine the two data arrays
      const combinedData = [...data1, ...data2];
      setProducts(combinedData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <div className="button-container">
              <div className="overlay">
                <Button />
              </div> 
            </div>
            <div className="product-info">
              <h5>{product.title}</h5>
              <div className="product-name"><h5>{product.title}</h5></div>
              <div className="product-category"><h5>{product.category}</h5></div>
              <div className="product-price"><h5>${product.price}</h5></div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Clothes;
