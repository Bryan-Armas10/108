import { createContext } from "react";

const GlobalContext = createContext({
    cart: [],
    user: {},

    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {}
});

export default GlobalContext;