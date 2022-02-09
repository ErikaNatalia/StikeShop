import cardStyle from './cardItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const add = <FontAwesomeIcon icon={faCartPlus} className={cardStyle.cardIcon} /> /* IconFormFA */

const CardItem = ({ data, addCart }) => {
    let { id, image, title, price } = data;
    return (
        <section className={cardStyle.card}>
            <img className={cardStyle.imgCard} src={image} alt="Aqui va la img del producto" />
            <p className={cardStyle.titleCard}>{title}</p>
            <br />
            <div className={cardStyle.priAdd}>
                <p className={cardStyle.priceCard}>Cop {price}.000</p>
                {/* Hacemos arrow function porque le vamos a pasar un parametro al onclick */}
                <button className={cardStyle.contIcon} onClick={() => addCart(id)}>{add}</button>
            </div>
        </section>
    );
}
export { CardItem }
