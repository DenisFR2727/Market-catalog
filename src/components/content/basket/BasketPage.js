import { NavLink,useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./basket.scss";

const Basket = ({basket}) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Прокручуємо сторінку вгору при зміні шляху
  }, [location]);
    return (
        <div className="basket_page">
            <div className="back_tovars_btn">
                <NavLink to="/tovars">
                    <button>Back to Tovars</button>
                </NavLink>
            </div>
            {basket}
        </div>
    )
}
export default Basket;