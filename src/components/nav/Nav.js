import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./nav.scss";
import Search from "../content/search/Search";
import ExitLogin from "../content/login/exitLogin";

const Nav = () => {
    const location = useLocation();
    const lengthTovars = useSelector((state) => state.basket);
    const isUserLoggedIn = useSelector((state) => state.isUserLoggedIn);
    const currentUserLogin = useSelector(state => state.currentUserLogin);

useEffect(() => {
      window.scrollTo(0, 0); // Прокручуємо сторінку вгору при зміні шляху
}, [location]);

    return (<div className="nav_pages">
            <nav>
                <ul className="pages_list">
                    <li>
                      <NavLink to="/Home" className="nav-link">
                        Home
                      </NavLink>
                    </li>
                    <li>
                     <NavLink to="/tovars"  className="nav-link">
                        Tovars
                     </NavLink>
                    </li>
                    {isUserLoggedIn && (
                    <li>
                      <NavLink to="/AddTovar" className="nav-link">
                        Add New Tovar
                      </NavLink>
                    </li>)}
                    <li>
                     <NavLink to="/Basket"  className="nav-link">
                        <div className="basket_length">
                            <FontAwesomeIcon icon={faShoppingBasket} />
                            {lengthTovars.length === 0 ? 
                              null 
                             :<p className="length_tovars_basket">{lengthTovars.length}</p>
                            }
                        </div>
                     </NavLink>
                    </li>
                    <li><Search /></li>
                    <li>
                      <NavLink to="/Registration" className="nav-link">Registration</NavLink>
                      <NavLink to="/Login" className="nav-link">Login</NavLink>
                      <div className="current_login_exit">
                         <p>{currentUserLogin}</p>
                         <ExitLogin />
                      </div>
                      
                    </li>
                </ul>  
            </nav>
  </div>)
}
export default Nav;