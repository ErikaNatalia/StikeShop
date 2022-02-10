import sHome from './secondSection.module.css'
import { Link } from "react-router-dom";
import { Btns } from '../../Btns';

const SecondSection = () => {

    return(
        <section className={sHome.sHome}>
            <div>
                <h1 className={sHome.titleS}>ALGUNOS DE NUESTROS 
                <Link to="/toUse"><Btns txt={"PRODUCTOS"}/></Link>
                </h1>
                <section className={sHome.slider}>
                    <img className={sHome.imgSlider} src="https://i.ibb.co/KrSj019/blue.jpg" alt="Camiseta Helio" width={150}/>
                    <img className={sHome.imgSlider} src="https://i.ibb.co/mtgBCVw/TSC-Strada-Nuova-Tire.jpg" alt="" width={150}/>
                    <img className={sHome.imgSlider} src="https://i.ibb.co/19nwzn9/IMG-20210325-WA0020.jpg" alt="" width={150}/>
                    <img className={sHome.imgSlider} src="https://i.ibb.co/Qmq6m2t/Stranger-Nas-Bars-1024x1024.jpg" alt="" width={150}/>
                </section>
            </div>
            <h1 className={sHome.h1S}>Somos especializados en BMX Freestyle</h1>
            <h1 className={sHome.titleS}>¡Click
            <a href="https://www.youtube.com/watch?v=7YEdLnFy1i0&t=14s" target="_blank" rel="noopener noreferrer"><Btns txt={"AQUÍ"}/></a>
            y verás nuestro video más reciente!</h1>
        </section>
    );
}

export {SecondSection}