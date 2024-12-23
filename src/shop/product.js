import { useContext } from "react";
import { ShopContext } from "../context/shopContext-old";

const Product = (props) => {
    const { id, productName, productImage, price } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
    const isInCart = cartItems?.some((item) => item.id === id);
    const productCount = cartItems?.find((item) => item.id === id)?.count || 0;

    return (
        <div className="col-md-4 col-lg-3 mb-3"> 
            <div className="card h-100">
                <img src={productImage} className="card-img-top" alt={productName} />
                <div className="card-body text-center">
                    <h5 className="card-title">{productName}</h5>
                    <p className="card-text">قیمت: {price.toLocaleString()} تومان</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-info me-2" onClick={() => addToCart(id)}>
                            افزودن به سبد خرید
                        </button>
                        {isInCart && (
                            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(id)}>
                                حذف از سبد
                            </button>
                        )}
                    </div>
                    {productCount > 0 && (
                        <span className="badge bg-secondary mt-2">
                            تعداد: {productCount}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
