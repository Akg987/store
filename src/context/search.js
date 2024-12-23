// src/context/search.js
import React, { useState } from "react";

const Search = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (onSearch && typeof onSearch === "function") {
            onSearch(query);
        }
    };

    return (
        <div className="search-container d-flex align-items-center">
            <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="جستجوی محصولات..."
                className="form-control me-2" 
            />
            <button className="btn btn-primary" type="button">جستجو</button> {/* Added a search button */}
        </div>

    );
};

export default Search;
