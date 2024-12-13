import React, { useContext } from "react";
import { PRODUCTS } from "./data/products";
import { ShopContext } from "./context/shopContext-old";
import Product from "./shop/product";

const Cart = () => {
    const { cartItems, resetCart } = useContext(ShopContext);

    return (
        <React.Fragment>
            <h1 className="">خرید های شما</h1>
            <div className="row">
                {PRODUCTS.map((p) => {
                    const cartItem = cartItems.find((i) => i.id === p.id);
                    if (cartItem && cartItem.count > 0) {
                        return <Product key={p.id} data={p} />;
                    }
                    return null; // Return null for items not in the cart
                })}
            </div>
            <button className="btn btn-warning m-3" onClick={resetCart}>
                Reset
            </button>
        </React.Fragment>
    );
};

export default Cart;
