import { TYPES } from "../actions/cartActions";

export const cartInitialState = {
    products: [
        {id:1, image: "https://i.ibb.co/YQbLT9W/IMG-20210325-WA0008.jpg", title: "Camiseta Helio-On Fiyah", price: 50, category: "Ropa"},
        {id:2, image: "https://i.ibb.co/KDjJdZ8/IMG-20210325-WA0009.jpg", title: "Camiseta Helio-Libertad", price: 50, category: "Ropa"},
        {id:3, image: "https://i.ibb.co/27YL3R9/mixed.jpg", title: "Camiseta Helio-Mixed", price: 50, category: "Ropa"},
        {id:4, image: "https://i.ibb.co/F6RqJLR/estampgray.jpg", title: "Camiseta Helio-Gris Estampada", price: 50, category: "Ropa"},
        {id:5, image: "https://i.ibb.co/KrSj019/blue.jpg", title: "Camiseta Helio-Azul", price: 50, category: "Ropa"},
        {id:6, image: "https://i.ibb.co/bJZD2Rg/funky.jpg", title: "Camiseta Helio-Funky", price: 50, category: "Ropa"},
        {id:7, image: "https://i.ibb.co/ftSnfSz/gray.jpg", title: "Camiseta Helio-Gris", price: 50, category: "Ropa"},
        {id:8, image: "https://i.ibb.co/19nwzn9/IMG-20210325-WA0020.jpg", title: "Camiseta Helio-Vinotinto", price: 50, category: "Ropa"},
        {id:9, image: "https://i.ibb.co/4pkCN0F/cap.jpg", title: "Gorra Reding-negra", price: 50, category: "Ropa"},
        {id:10, image: "https://i.ibb.co/r6zF51Y/ccap.jpg", title: "Gorra Snapback-gris negra", price: 50, category: "Ropa"},
        {id:11, image: "https://i.ibb.co/pWCgnzr/ODSY-Chain.jpg", title: "ODSY-Chain-Black-Full", price: 50, category: "Repuesto"},
        {id:12, image: "https://i.ibb.co/zJ7HQjD/Eclat-chain.jpg", title: "Eclat_Diesel_chain_black", price: 50, category: "Repuesto"},
        {id:13, image: "https://i.ibb.co/d42BbCV/cajas-de-frente-zero1.png", title: "cajas-de-frente-zero-black", price: 50, category: "Repuesto"},
        {id:14, image: "https://i.ibb.co/c23zxSL/cajas-de-frente-zero.png", title: "cajas-de-frente-zero-gris", price: 50, category: "Repuesto"},
        {id:15, image: "https://i.ibb.co/mtgBCVw/TSC-Strada-Nuova-Tire.jpg", title: "TSC_StradaNuovaTire", price: 50, category: "Repuesto"},
        {id:16, image: "https://i.ibb.co/xqVkPj5/Cubierta-PRIMO-AQUA.jpg", title: "cubierta-BMX-PRIMO-CHURCHILL-AQUA-MINT", price: 50, category: "Repuesto"},
        {id:17, image: "https://i.ibb.co/HDRcVGj/CUBIERTA-PRIMO-CHURCHILL.jpg", title: "CUBIERTA-PRIMO-CHURCHILL", price: 50, category: "Repuesto"},
        {id:18, image: "https://i.ibb.co/sj0Yxng/hammer-skin5.jpg", title: "hammer-skin5", price: 50, category: "Repuesto"},
        {id:19, image: "https://i.ibb.co/Qmq6m2t/Stranger-Nas-Bars-1024x1024.jpg", title: "Stranger_Nas_Bars", price: 50, category: "Repuesto"},
        {id:20, image: "https://i.ibb.co/4gqbt1x/heat-wave1.jpg", title: "heat-wave1", price: 50, category: "Repuesto"}
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