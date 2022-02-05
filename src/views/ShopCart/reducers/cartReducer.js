import { TYPES } from "../actions/cartActions";

export const cartInitialState = {
    products: [
        {id:1, image: "", title: "Producto 1", price: 50},
        {id:2, image: "", title: "Producto 2", price: 51},
        {id:3, image: "", title: "Producto 3", price: 52},
        {id:4, image: "", title: "Producto 4", price: 53},
        {id:5, image: "", title: "Producto 5", price: 54},
        {id:6, image: "", title: "Producto 6", price: 55},
        {id:7, image: "", title: "Producto 7", price: 56},
        {id:8, image: "", title: "Producto 8", price: 57},
        {id:9, image: "", title: "Producto 9", price: 58},
        {id:10, image: "", title: "Producto 10", price: 59}
    ],
    cart: []
};

// funcion reductora, debe tener un estado y un objeto que son las actions
export function cartReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_CART:{
            // El new item accede al estado que recibe el reducer
            // Con find un metodo funcional encuentro un elemento
            // Con el payload almaceno el objeto en new item cuando sea igual al id
            let newItem = state.products.find(
                (product) => product.id === action.payload
            );
            let itemInCart = state.cart.find((item) => item.id === newItem.id);

            return itemInCart
            //Si ya existe, entonces
            ?{
                ...state, 
                cart: state.cart.map((item) => 
                item.id === newItem.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                ),
            } 
            //Si no...
            : {
                ...state,
                /* Copia todo lo que hay en el carro pero agregale este newItem */ 
                cart: [...state.cart, {...newItem, quantity: 1}],
            };
        }
        case TYPES.REMOVEO_CART:{
            let delItem = state.cart.find((item) => item.id === action.payload);
            return delItem.quantity > 1 ? 
            {
                ...state,
                cart: state.cart.map((item) => 
                item.id === action.payload 
                ? {...item, quantity: item.quantity -1}
                : item
                ),
            } 
            : {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case TYPES.REMOVEA_CART:{
            return{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            }
        }
        case TYPES.CLEAR_CART:{
            return cartInitialState;
        }
        default:
            return state;
    }
}