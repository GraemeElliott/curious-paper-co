import { createContext, useState } from "react";

import PRODUCTSJSON from "../components/products-data/products-data.json"

export const ProductsContext = createContext({
    products: [],
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTSJSON);
    const value = { products };

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}