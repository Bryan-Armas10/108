// import { createContext } from "react";

// const GlobalContext = createContext({
//     cart: [],
//     user: {},

//     addToCart: () => {},
//     removeFromCart: () => {},
//     clearCart: () => {}
// });

// export default GlobalContext;


import { createContext, useState } from "react";

// Create context
const GlobalContext = createContext({
    cart: [],
    catalog: [],  // New status for the product catalog
    user: {},

    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    addProduct: () => {} // New feature to add products to the catalog
});

export function GlobalProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [catalog, setCatalog] = useState([]); // Status for product catalog

    // Add products to cart function
    function addToCart(product) {
        setCart([...cart, product]);
    }

    // Function to remove products from the cart
    function removeFromCart(productId) {
        setCart(cart.filter(prod => prod._id !== productId));
    }

    // Function to clean the stroller
    function clearCart() {
        setCart([]);
    }

    // Function to add products to the catalog
    function addProduct(newProduct) {
        setCatalog([...catalog, newProduct]);
    }

    return (
        <GlobalContext.Provider
            value={{
                cart,
                catalog,
                user: {},
                addToCart,
                removeFromCart,
                clearCart,
                addProduct
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;