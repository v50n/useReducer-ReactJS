import React, { useRef } from 'react';
import {GetShoppingContextVal} from './context'

const ShoppingList = () =>{
    const inputRef = useRef();
    const {productsList, addItem,increase} = GetShoppingContextVal();
    console.log(productsList)
    function handleSubmit(e) {
        e.preventDefault();
        addItem(inputRef.current.value,1);
        inputRef.current.value = '';
    }

    function handleRemoveItem(e){
        e.preventDefault();

    }
    function handleRemoveAll(e){
        e.preventDefault();

    }
    
    function handleAddQuantity(e){
        e.preventDefault();
        increase(e.target.parentNode.id)
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} />
        </form>
        <ul>
          {productsList.map((item, index) => (
            <li key={index} id={item.id} >
              {item.name} - quantity : {item.quantity} -----
              <button onClick={handleAddQuantity}>Add quantity</button>
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