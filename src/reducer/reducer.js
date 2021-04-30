
export function reducerShoppingList(state,action){
    switch (action.type) {
        case 'add':
            return {
                    totalProduct: state.totalProduct + 1,
                    totalPrice: 0,
                    productsList: [...state.productsList, {
                        id: state.productsList.length,
                        name: action.name,
                        quantity: 1
                    }]
                };
        case 'remove-item':
            return state.filter((item) => item.id != action.id );
        case 'remove-all':
            return [];
        case 'increase': 
            let tempProduct = state.productsList.map(item => {
                if(item.id === parseInt(action.index)) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            });
            let totalProduct = tempProduct.reduce((accumulator, currentVal) => {return accumulator + currentVal.quantity},0);
            return {
                ...state,
                totalProduct,
                productsList: tempProduct
            }
        default:
          throw new Error();
      }
}
