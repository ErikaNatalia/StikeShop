
import style from './menu.module.css'

const Menu = (props) => {

    const {show} = props;

    return (
        <ul className={`${style.menuContainer} ${show ? style.show : style.hide}`}>
            <li className={style.liMenu}>INICIO</li>
            <li className={style.liMenu}>PARA USAR</li>
            <li className={style.liMenu}>REPUESTOS</li>
        </ul>
    );
}

export { Menu }