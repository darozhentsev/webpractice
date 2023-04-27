import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {NavLink} from "react-router-dom";
import BtnDark from "./../btn-dark/btn-dark";
/*import BtnCart from "../btnCart/BtnCart";*/
import "./navbar.css"
import CartBlock from "../cart-block/cart-block";


const Navbar = () => {

    const activeLink = 'nav-list__link nav-list__link-active';
    const normalLink = 'nav-list__link';


    return ( 
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>LevelUp Lounge</strong>
                    </NavLink>
                    
                   <BtnDark />
                   
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) => 
                                isActive ? activeLink : normalLink}>
                                Главная
                            </NavLink>
                        </li>


                        <li className="nav-list__item">
                            <NavLink to="/about-us" className={({isActive}) => 
                                isActive ? activeLink : normalLink}>
                                О нас
                            </NavLink>
                        </li>

                        <CartBlock />
                        
                    </ul>
                </div>
            </div>
            <hr/>
      </nav>
     );
}
 
export default Navbar;