import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, count) => {
        let findProduct = cartList.find(product => product.idItem === item.id);

        if ( findProduct === undefined) {

            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.thumbnail,
                    nameItem: item.name,
                    costItem: item.cost,
                    countItem: count
                }
            ]);
        } else {
            findProduct.countItem += count;
        }
    }

    const removeItems = () => {
        setCartList([]);
    }

    const removeItem = (id) =>{
        setCartList(cartList.filter (item => item.idItem !== id));
    }

    return (
        <CartContext.Provider value={{cartList, removeItems, removeItem, addItem}}> 
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;