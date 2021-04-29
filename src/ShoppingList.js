import React, { useReducer, useRef } from 'react';
import {reducerShoppingList} from './reducer/reducer'

const ShoppingList = () =>{
    const initialItemList = [];
    const inputRef = useRef();
    const [items, dispatch] = useReducer(reducerShoppingList, initialItemList);
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
          type: 'add',
          name: inputRef.current.value,
          quantity: 1
        });
        inputRef.current.value = '';
    }

    function handleRemoveItem(e){
        e.preventDefault();
        dispatch({
            type: 'remove-item',
            id: e.target.parentNode.id
        })
    }
    function handleRemoveAll(e){
        e.preventDefault();
        dispatch({
            type: 'remove-all',
            
        })
    }
    
    function handleAddQuantity(e){
        e.preventDefault();
        console.log(items)
         dispatch({
            type: 'add-quantity',
            id: e.target.parentNode.id
        })
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} />
        </form>
        <ul>
          {items.map((item, index) => (
            <li key={item.id} id={item.id} >
              {item.name} - quantity : {item.quantity} -----
              <button onClick={(e) => handleAddQuantity(e)}>Add quantity</button>
              <button>Decrement quantity</button>
              <button onClick={handleRemoveItem}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={handleRemoveAll}>Clear All</button>
      </>
    )    
}

export default ShoppingList;