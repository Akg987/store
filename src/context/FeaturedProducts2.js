import React from 'react';
import { Link } from 'react-router-dom'; // Use React Router for navigation
import { PRODUCTS } from '../data/products';

const FeaturedProducts = () => {
  return (
    <section className="bg-light">
      <div className="container py-5">
        {/* Section Header */}
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">لوستر ها</h1>
            <p>
              انواع لوستر های دیواری و سقفی
            </p>
          </div>
        </div>
        {/* Product Cards */}
        <div className="row">
          {PRODUCTS.map((product) => (
            <div className="col-12 col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                {/* Product Image */}
                <Link to={`/shop/${product.id}`}>
                  <img
                    src={product.productImage}
                    className="card-img-top"
                    alt={product.productName}
                  />
                </Link>
                <div className="card-body">
                  {/* Product Rating */}
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">تومان {product.price}</li>
                  </ul>
                  {/* Product Name */}
                  <Link
                    to={`/shop/${product.id}`}
                    className="h2 text-decoration-none text-dark"
                  >
                    {product.productName}
                  </Link>
                  {/* Product Description */}
                  <p className="card-text">{product.productText}</p>
                  {/* Review Count */}
                  <p className="text-muted">Reviews (24)</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
