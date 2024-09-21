import React, { useEffect, useState } from "react";
import "../styles/Home.css";
// import WarrantyBanner from "../components/WarrantyBanner/WarrantyBanner copy";
import { Link } from 'react-router-dom';



function Home() {
  
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll(".gallery img").forEach((img) => {
        img.classList.add("animateImage");
      });
    }, 100);
  }, []);

  const [productCount, setProductCount] = useState(8);

  const images = [
    "https://picsum.photos/1400/1500",
    "https://picsum.photos/1200/1200",
    "https://picsum.photos/1300/1300",
    "https://picsum.photos/1500/1500",
  ];

  const showMoreProducts = () => {
    setProductCount((prevCount) => prevCount + 8);
  };

  const showLessProducts = () => {
    setProductCount(8);
  };

  return (
    <div>
      <div className="banner">
      </div>
      <div className="categories">
        <ul>
          <li>
            <h2>Categories</h2>
          </li>
        </ul>
        <div className="categoriesCarousel">
       
        <div className="Clothes">
      <Link to="/Clothes" className="divLink">
        <div className="ClothesImg" />
        <div className="ClothesTitle">
          <h3>Clothes</h3>
        </div>
      </Link>
    </div>
  



          <div className="Accessories">
          <Link to="/Accessories" className="divLink">
            <div className="AccessoriesImg"></div>
            <div className="AccessoriesTitle">
            <h3>Accessories</h3>
            </div>
            </Link>
          </div>
          <div className="Electronics">
          <Link to="/Electronics" className="divLink">
            <div className="ElectronicsImg"></div>
            <div className="ElectronicsTitle">
              <h3>Electronics</h3>
             </div>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
