import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Button/Button';
// import '././src/components/Accessories.CSS'; // Ensure the CSS file is correctly named and imported

function Accessories() {
  const [products, setProducts] = useState([]);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
      const jsonData = await response.json();
      setProducts(jsonData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Call fetchProducts when component mounts
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

export default Accessories;
