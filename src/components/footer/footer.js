import "./footer.css"
import {BsTelegram} from 'react-icons/bs'
import {SlSocialVkontakte} from 'react-icons/sl'
import {BsWhatsapp} from 'react-icons/bs'


const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer_wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://t.me/darozhentsev"><BsTelegram/>Telegram</a></li>
                    <li className="social__item"><a href="https://vk.com/livefastdieyoung27"><SlSocialVkontakte/>ВКонтакте</a></li>
                    <li className="social__item"><a href="https://wa.me/79236506955"><BsWhatsapp/>WhatsApp</a></li>
                </ul>

                <div className="copyright">
                    2023 prod. by Rozhentsev Timur
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;