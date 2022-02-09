import cartStyle from './cartItem.module.css'

const CartItem = ({data, removeFCart}) => {
    //destructuring
    let{id, image, title, price, quantity} = data;
    return(
        <div className={cartStyle.item}>
            <img className={cartStyle.imgItem} src={image} alt="Aqui imagen"/>
            <h2 className={cartStyle.titleArt}>{title}</h2>
            <h3>Cop{price}.000 x {quantity} = cop{price*quantity}.000</h3>
            <button onClick={() => removeFCart(id)}>Eliminar un producto</button>
            <br/>
            <button onClick={() => removeFCart(id, true)}>Eliminar todos los productos</button>
        </div>
    );
}
export {CartItem}