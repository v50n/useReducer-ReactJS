import React, {useReducer} from 'react';

const Counter = () =>{
    const [sum, dispatch] = useReducer((state, action) => {
        return state + action;
      }, 0)

    return (
        <>
        {sum}
  
        <button onClick={() => dispatch(1)}>
          Add 1
        </button>
      </>
    );
}

export default Counter;