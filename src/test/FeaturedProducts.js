import React from 'react';
import { PRODUCTS } from '../data/products';

const FeaturedProducts = () => {
  return (
    <section className="bg-light">
      <div className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
          <h1 className="h1">لوستر ها</h1>
            <p>
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
        <div className="row">
          {PRODUCTS.map((product) => (
            <div className="col-12 col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <a href="shop-single.html">
                  <img src={product.productImage} className="card-img-top" alt={product.productName} />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">تومان {(product.price)}</li>
                  </ul>
                  <a href="shop-single.html" className="h2 text-decoration-none text-dark">
                    {product.productName}
                  </a>
                  <p className="card-text">
                  {product.productText}
                  </p>
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
