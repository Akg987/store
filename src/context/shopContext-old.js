import { useEffect, createContext, useState } from "react";

export const ShopContext = createContext({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    resetCart: () => {},
});

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("luxluster_cart");
        setCartItems(data ? JSON.parse(data) : []);
    }, []);

    useEffect(() => {
        localStorage.setItem("luxluster_cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === itemId);
            if (!existingItem) {
                return [...prevItems, { id: itemId, count: 1 }];
            } else {
                return prevItems.map((item) => {
                    if (item.id === itemId) {
                        return { ...item, count: item.count + 1 };
                    }
                    return item;
                });
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => {
            return prevItems.map((i) => {
                if (i.id === itemId) {
                    return { ...i, count: i.count === 0 ? 0 : i.count - 1 };
                }
                return i;
            });
        });
    };

    const resetCart = () => {
        setCartItems([]);
        localStorage.removeItem("luxluster_cart");
    };

    const contextValue = { cartItems, addToCart, removeFromCart, resetCart };
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
