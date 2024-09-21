import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../src/components/Button/Button';
import '../styles/Shop.css';

function Shop() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // You can adjust this number

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    setProducts(jsonData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Logic for pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="">
      <div className="shopBanner">
        <h2>Shop</h2>
        <p>
          <span>Home {">"} </span>
          Shop
        </p>
      </div>
      
      <div className="container">
        {currentProducts.map((values) => (
          <Link to={`/product/${values.id}`} key={values.id}>
            <div className="product-card">
              <div className="overlay">
                <Button />
              </div>
              <div className="button-container">
                <img src={values.image} alt={values.title} />
              </div>
              <div className="product-info">
                <h5>{values.name}</h5>
                <div className="product-title"><h5>{values.title}</h5></div>
                <div className="product-category"><h5>{values.category}</h5></div>
                <div className="product-price"><h5>${values.price}</h5></div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Shop;
