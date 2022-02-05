const CardItem = ({data, addCart}) => {
    let{id, image, title, price} = data;
    return(
        <div style={{border:"thin solid gray", padding:"1rem"}}>
            <img src={image} alt="Aqui va la img del producto" />
            <h2>{title}</h2>
            <h3>Cop{price}.000</h3>
            {/* Hacemos arrow function porque le vamos a pasar un parametro al onclick */}
            <button onClick={() => addCart(id)}>Agregar</button>
        </div>
    );
}
export {CardItem}
