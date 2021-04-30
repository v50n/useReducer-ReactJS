import {createContext, useContext, useReducer } from "react";
import {reducerShoppingList} from './reducer/reducer';

const ShoppingCartContext = createContext();

const initialState = {
    totalProduct: 0,
    totalPrice: 0,
    productsList : []
}

const ShoppingCartProvider = ({children}) =>{
    const [state,action] = useReducer(reducerShoppingList, initialState);
    const addItem = (name,quantity) =>{
        action({
            type: 'add',
            name,
            quantity
        })
    }
    const increase = (index) =>{
        action({
            type: 'increase',
            index
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            ...state,
            addItem,
            increase
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

const GetShoppingContextVal = () =>{
    return useContext(ShoppingCartContext);
}

export {ShoppingCartProvider, GetShoppingContextVal};