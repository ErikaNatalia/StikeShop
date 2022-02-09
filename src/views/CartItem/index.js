import cartStyle from './cartItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const delAll = <FontAwesomeIcon icon={faTrash} className={cartStyle.trashIcon} /> /* IconFormFA */

const CartItem = ({data, removeFCart}) => {
    //destructuring
    let{id, image, title, price, quantity} = data;
    return(
        <div className={cartStyle.item}>
            <img className={cartStyle.imgItem} src={image} alt="Aqui imagen"/>
            <div className={cartStyle.featuresItem}>
                <button className={cartStyle.conteIcon} onClick={() => removeFCart(id, true)}>{delAll}</button>
                <p className={cartStyle.titleArt}>{title}</p>
                <p className={cartStyle.priceItem} >Cop {price}.000 x {quantity} = cop {price*quantity}.000</p>
                <button onClick={() => removeFCart(id)}>Eliminar un producto</button>
            </div>
        </div>
    );
}
export {CartItem}