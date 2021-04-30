import {GetShoppingContextVal} from './context';


const Panier = () =>{
    const {totalProduct} = GetShoppingContextVal();
    return (
        <div className="panier">
            You have : {totalProduct} quantity
        </div>
    )
}


export default Panier;