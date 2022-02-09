import { useReducer } from "react";
import { CardItem } from "../CardItem";
import { CartItem } from "../CartItem";
import { TYPES } from "./actions/cartActions";
import { cartInitialState, cartReducer } from "./reducers/cartReducer";
import shop from './shopCart.module.css'

const ShopCart = () => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    // destructuring
    const {products, cart} = state;

    //Funciones de actions
    const addCart = (id) => {
        //desencadenar la funciónalidad del reducer por medio del dispatch function
        //dispatch contiene la acción que es el type
        //Payload es el dato con el que va a funcionar el reduce
        dispatch({type: TYPES.ADD_CART, payload:id});
    };

    const removeFCart = (id, all = false) => {
        
        if(all){
            dispatch({type: TYPES.REMOVEA_CART, payload:id})
        }else{
            dispatch({type:TYPES.REMOVEO_CART, payload:id})
        }
    };

    const clearCart = () => {
        dispatch({type: TYPES.CLEAR_CART})
    };

    return(
        <div>
            <h1>Carrito de compras</h1>
            <h2>Productos</h2>
            {/* Renderiza, de los productos en estado inicial, mapea cada producto */}
            <article className={shop.boxCard}>
                {products.map((product) => (
                    <CardItem 
                    key={product.id} 
                    data={product} 
                    addCart={addCart}/>
                ))}
            </article>
            <h2>Tu compra</h2>
            <article className={shop.boxItem}>
                <button onClick={clearCart}>Limpiar el carrito</button>
                {cart.map((item, index) => (
                    <CartItem 
                    key={index} 
                    data={item}
                    removeFCart={removeFCart}/>
                ))}
            </article>

        </div>
    );
}

export {ShopCart}