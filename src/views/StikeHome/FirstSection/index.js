import fHome from './firstSection.module.css'
import imageHome from '../../../media/toHome.jpg'
import { Link } from 'react-router-dom';
import { Link } from 'react-scroll'
//Import de fontawesom services
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Btns } from '../../Btns';

const down = <FontAwesomeIcon icon={faChevronDown} /> /* IconFormFA */
const FirstSection = () => {

    return (
        <section className={fHome.fHome}>
            <img src={imageHome} alt="Stike Bike Shop" className={fHome.imgHome} />
            <div className={fHome.imglayer}></div>
            <div className={fHome.home}>
                <h1 className={fHome.homeTitle}>COMPARTIMOS LA ESENCIA DEL BMX</h1>
                <br/> <br/>
                <div className={fHome.buttons}>
                <Link to="/toUse"><Btns txt={"REPUESTOS"}/></Link>
                <Link to="/toUse"><Btns txt={"PARA USAR"}/></Link>
                </div>
            </div>
            <div className={fHome.arrowIcon}>
                <p>{down}</p>
            </div>
        </section>
    );
}

export { FirstSection }