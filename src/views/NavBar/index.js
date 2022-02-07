import nav from './navBar.module.css'
import logo from '../../media/stikeLogo.jpg'
//import { Link } from 'react-router-dom'; //Import react router
//Import de fontawesom services
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} /> /* IconFormFA */

const NavBar = () => {

    return (
        <header>
            <nav className={nav.nav}>
                <svg viewBox="0 0 100 80" className={nav.svgNav}>
                    <rect width="100" height="13" />
                    <rect y="30" width="78" height="13" />
                    <rect y="60" width="50" height="13" />
                </svg>
                <img src={logo} alt="Logo" className={nav.imgNav}/>
                {/* <Link className={nav.iconNav} to="/">{cartIncon}</Link> */}
                <h1 className={nav.iconNav}>{cartIcon}</h1>
            </nav>
        </header>
    );
}

export { NavBar }