// src/context/ProductContext.js
import React, { createContext, useState } from "react";
import { PRODUCTS } from "../data/products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

    const searchInProduct = (query) => {
        if (query.trim() === "") {
            setFilteredProducts(PRODUCTS); // Reset to all products if the query is empty
        } else {
            const filtered = PRODUCTS.filter((product) =>
                product.productName.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <ProductContext.Provider value={{ filteredProducts, searchInProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
