import React from "react";
import { Link } from "react-router-dom";
import style from './menu.module.css'

const Menu = (props) => {

    const {show} = props;

    return (
        <ul className={`${style.menuContainer} ${show ? style.show : style.hide}`}>
            {/* <Link to="/"><li className={style.liMenu}>INICIO</li></Link> */}
            <Link className={style.liMenu} to="/"><li className={style.liMenu}>INICIO</li></Link>
            <Link className={style.liMenu} to="/toUse"><li>PARA USAR</li></Link>
            <Link className={style.liMenu} to="/toUse"><li className={style.liMenu}>REPUESTOS</li></Link>
        </ul>
    );
}

export { Menu }