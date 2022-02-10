import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import nav from './navBar.module.css'
import logo from '../../media/stikeLogo.jpg'
//Import de fontawesom services
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../Menu';
import { Link } from "react-router-dom";
import { MenuBtn } from './MenuBtn';
import { Footer } from "../Footer"

const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} /> /* IconFormFA */

const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <header>
                <nav className={nav.nav}>
                    {/* <svg viewBox="0 0 100 80" className={nav.svgNav}>
                        <rect width="100" height="13" />
                        <rect y="30" width="78" height="13" />
                        <rect y="60" width="50" height="13" />
                    </svg> */}
                    <MenuBtn onToggle={handleToggle}/>
                    <Menu show={toggle}/>
                    <Link to="/"><img src={logo} alt="Logo" className={nav.imgNav}/></Link>
                    {/* <Link className={nav.iconNav} to="/">{cartIncon}</Link> */}
                    <Link to="/toUse"><h1 className={nav.iconNav}>{cartIcon}</h1></Link>
                </nav>
            </header>
            <Outlet/>
            <Footer/>
        </>
    );
}

export { NavBar }