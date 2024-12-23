import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext-old";
import './SingleShop.css';

const SingleShop = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((item) => item.id.toString() === productId);
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  if (!product) {
    return <h2 className="text-center">محصول یافت نشد</h2>;
  }

  // تعداد محصول در سبد خرید را دریافت کنید
  const productInCart = cartItems?.find((item) => item.id === product.id);
  const productCount = productInCart?.count || 0;

  return (
    <div className="lux-single-product section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="lux-left-image">
              <img
                src={product.productImage}
                alt={product.productName}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 lux-align-self-center">
            <h4>{product.productName}</h4>
            <span className="lux-price">
              {product.price.toLocaleString()} تومان
            </span>
            <p>{product.productText}</p>

            <div className="lux-cart-actions">
              <button
                className="lux-btn btn-danger"
                onClick={() => removeFromCart(product.id)}
                disabled={productCount === 0}
              >
                <i className="fa fa-minus"></i>
              </button>
              <span className="lux-product-count">{productCount}</span>
              <button
                className="lux-btn btn-success"
                onClick={() => addToCart(product.id)}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
