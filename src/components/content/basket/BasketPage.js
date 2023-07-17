import { NavLink } from "react-router-dom";
import "./basket.scss";

const Basket = ({basket}) => {

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