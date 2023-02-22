import { createContext, useReducer } from "react";
import { cartReducer, initCart } from "./ReducerCart";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, dispatch] = useReducer(cartReducer, initCart);

    return (
        <CartContext.Provider value={[cart, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}