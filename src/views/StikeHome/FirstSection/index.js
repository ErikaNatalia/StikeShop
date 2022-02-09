import fHome from './firstSection.module.css'
import imageHome from '../../../media/toHome.jpg'
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
                    <Btns txt={"REPUESTOS"}/>
                    <Btns txt={"PARA USAR"}/>
                </div>
            </div>
            <div className={fHome.arrowIcon}>
                <p>{down}</p>
            </div>
        </section>
    );
}

export { FirstSection }