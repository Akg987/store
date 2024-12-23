import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import Search from "../context/search";
import { ShopContext } from "../context/shopContext-old";

const Navbar = () => {

    const { cartItems } = useContext(ShopContext);

    // حساب کردن کل ایتم ها در cart
    const totalItems = cartItems.reduce((acc, item) => acc + item.count, 0);


    const { filteredProducts, searchInProduct } = useContext(ProductContext);
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    // کنترل تغییرات ورودی جستجو
    const handleSearch = (query) => {
        searchInProduct(query);
        setSearchResults(filteredProducts);
    };

    // مدیریت کلیک محصول از نتایج جستجو
    const handleProductClick = (productId) => {
        navigate(`/shop/${productId}`);
    };

    return (
        <>
            {/* Top Navbar */}
            <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
                {/* Content omitted for brevity */}
            </nav>

            {/* Main Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link className="navbar-brand text-success logo h1 align-self-center" to="/Home">
                        Luxluster
                    </Link>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#templatemo_main_nav"
                        aria-controls="templatemo_main_nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="templatemo_main_nav">
                        <ul className="nav navbar-nav mx-auto">
                            <li className="nav-item ">
                                <Link className="nav-link me-5" to="/Home">فروشگاه</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-5" to="/about">درباره ما</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-5" to="/contact">ارتباط باما</Link>
                            </li>
                        </ul>
                        <div className="navbar align-self-center d-flex">
                            <a
                                className="nav-icon d-none d-lg-inline"
                                data-bs-toggle="modal"
                                data-bs-target="#templatemo_search"
                            >
                                <i className="fa fa-fw fa-search text-dark"></i>
                            </a>
                            <Link to="/cart" className="nav-icon position-relative text-decoration-none"> {/* onclick={} */ }
                            <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                            <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"> {totalItems}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Search Modal */}
            <div
                className="modal fade bg-white"
                id="templatemo_search"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <Search onSearch={handleSearch} />
                            {searchResults.length > 0 ? (
                                <ul className="list-group mt-3">
                                    {searchResults.map((product) => (
                                        <li
                                            key={product.id}
                                            className="list-group-item"
                                            onClick={() => handleProductClick(product.id)}
                                        >
                                            {product.productName}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mt-3">No results found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
