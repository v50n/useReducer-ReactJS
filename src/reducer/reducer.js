
export function reducerShoppingList(state,action){
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: state.length,
                    name: action.name,
                    quantity: action.quantity
                }
            ];
        case 'remove-item':
            return state.filter((item) => item.id != action.id );
        case 'remove-all':
            return [];
        case 'add-quantity': 
            let itemIndex = [...state].findIndex((item => item.id == parseInt(action.id)));
            console.log("before update : " , state[itemIndex].quantity);
            let val = state[itemIndex].quantity + 1;
            state[itemIndex].quantity  = val;
            console.log("after update: ",val);
            return [...state];
        default:
          throw new Error();
      }
}
