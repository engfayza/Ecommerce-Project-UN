import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Button/Button';
import './PRODUCT.css'

function Products() {
  const [fake, setFake] = useState([]);
  console.log(fake);

  const Product = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    setFake(jsonData);
  };

  useEffect(() => {
    Product();
  }, []);

  return (
    <Link to={`/product/${Product.id}`}>
      <>
    <div className="container ">
      {fake.map((values) => (
            <div className="product-card" key={values.id}>
               <div className="overlay">
                        <Button/>
              </div> 
              <div className="button-container">
                  <img src={values.image} alt={values.title}  />
                      
               </div>
               <div className="product-info">
                   <h5>{values.name}</h5>
                   <div className="product-title"><h5>{values.title}</h5></div>
                   <div className="product-Categogery"><h5>{values.category}</h5></div>
                   <div className="product-name"><h5>{values.name}</h5></div>
                    <div className="product-category"><h5>{values.category}</h5></div>
                    <div className="product-price"><h5>${values.price}</h5></div>
              </div>
          </div>
      ))}
    </div>
    </>

    
    </Link>

  );
}

export default Products;



