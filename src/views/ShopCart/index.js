import { useReducer} from "react";
import { CardItem } from "../CardItem";
import { CartItem } from "../CartItem";
import { TYPES } from "./actions/cartActions";
import { cartInitialState, cartReducer } from "./reducers/cartReducer";
import shop from './shopCart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// Import the font that we going to use

const delCart = <FontAwesomeIcon icon={ faTimes }/> /* IconFormFA */

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
            <p className={shop.h1}>NUESTROS PRODUCTOS</p>
            {/* Renderiza, de los productos en estado inicial, mapea cada producto */}
            <section className={shop.boxCard}>
                {products.map((product) => (
                    <CardItem 
                    key={product.id} 
                    data={product} 
                    addCart={addCart}/>
                ))}
            </section>
            <h2 className={shop.h1L}>Tu compra</h2>
            <section>
                <article className={shop.boxItem}>
                    <button className={shop.btnClear} onClick={clearCart}>{delCart}</button>
                    <br />
                    {cart.map((item, index) => (
                        <CartItem 
                        key={index} 
                        data={item}
                        removeFCart={removeFCart}/>
                    ))}
                </article>
            </section>

        </div>
    );
}

export {ShopCart}