import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from "react-router-dom";
import Button from '../Button';
// import './Clothes.css'

function Productdetail () {
  const [fake, setFake] = useState([]);
  console.log(fake);

  const Product = async () => {
    const response = await fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json))

  };

  useEffect(() => {
    Product();
  }, []);

  return (
    <Link to={`/product/${Product.id}`}>
   
      {fake.map((values) => (
            <div className="single-card" key={values.id}>
             {/* <div className="product-tiltlr"><h2>${values. title}</h2></div> */}
              {/* <img src={values.image} alt={values.imgage}  /> */}
            <div className="button-container">
         </div>
          <div className="product-infocard-info">
               <h5>{values.name}</h5>
              <div className="product-name"><h5>{values.name}</h5></div>
              <div className="product-category"><h5>{values.category}</h5></div>
              <div className="product-price"><h5>${values.price}</h5></div>
              <div className="product-description"><h5>${values. description}</h5></div>
            </div>
          </div>
      ))}

    </Link>

  );
}

export default Productdetail ;



