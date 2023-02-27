import { createContext, useReducer } from "react";
import { cartReducer, initCartFromLocalStorage } from "./ReducerCart";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, dispatch] = useReducer(cartReducer, initCartFromLocalStorage());

    return (
        <CartContext.Provider value={[cart, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}