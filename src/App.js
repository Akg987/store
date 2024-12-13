import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JS
import Navbar from './components/Navbar2';
import Footer from './components/Footer';
import Home from './components/Home2';
import Contact from './components/contact';
import About from './components/About';
import SearchResults from './context/search';
import { PRODUCTS } from "../src/data/products";
import SingleShop from "../src/components/SingleShop";
import Cart from './cart';
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/search" element={<SearchResults />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/shop/:productId" element={<SingleShop products={PRODUCTS} />} />
                <Route path="/about" element={<About />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

