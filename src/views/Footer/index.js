import footer from './footer.module.css'
//Import de fontawesom services
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// Import the font that we going to use

const instaIcon = <FontAwesomeIcon icon={faInstagram} className={footer.ig}/> /* IconFormFA */
const youIcon = <FontAwesomeIcon icon={faYoutube} className={footer.you}/> /* IconFormFA */
const faceIcon = <FontAwesomeIcon icon={faFacebook} className={footer.face}/> /* IconFormFA */
const Footer = () => {

    return(
        <footer className={footer.footer}>                                                                                      
            <div className={footer.netBox}>
                Bogotá, Colombia <br/> Cra 52 # 45a - 29 Sur
                <div className={footer.icons}>
                    <a className={footer.a} href="https://instagram.com/stikebikeshop?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">{instaIcon}</a>
                    <a className={footer.a} href="https://www.youtube.com/channel/UCq1TMipFFDC6tE6lnUUaZ9A" target="_blank" rel="noopener noreferrer">{youIcon}</a>
                    <a className={footer.a} href="https://es-la.facebook.com/Stikebmx/" target="_blank" rel="noopener noreferrer">{faceIcon}</a>
                </div>
            </div>
            <div className={footer.lfooter}>© 2022 All Rights Reserved - Powered by <span className={footer.dev}>S1SU</span></div>
        </footer>
    );
}

export {Footer}