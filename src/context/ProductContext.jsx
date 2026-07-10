import { createContext, useState } from "react";
{/*reate context for product data*/}
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    var rsp = [
        {
            id: 1,
            name: "Greek Yougurt Parfait",
            quantity: 5 
        },

        {
            id: 2,
            name: "Berry Smoothie",
            quantity: 3 
        }

    ];
    const [products, setProducts] = useState(rsp);
    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
}





export default ProductContext;