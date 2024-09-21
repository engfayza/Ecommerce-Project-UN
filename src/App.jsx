import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductComparison from "./pages/ProductComparison";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import CartProvider from "./components/CartProvider ";
import Accessories from "./components/Accessories/Accessories";
import Clothes from "./components/Clothes/Clothes";
import Electronics from "./components/Electronics/Electronics";
import WarrantyBanner from "./components/WarrantyBanner";
function App() {
  return (
 <CartProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/comparison" element={<ProductComparison />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <WarrantyBanner/>
      <Footer />
    </Router>
  
  </CartProvider>
  );
}

export default App;
