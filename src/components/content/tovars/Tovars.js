import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import {
        fetchTovars,
        tovarsList,
        selectCard,
        addTovar,
} from "./tovarsSlice";
import "./tovars.scss";
import BasketModal from "../basket/BasketModal";
import Filter from "../filter/Filter";
import ShowDiscounts from "../modals/ShowDiscounts.js";
import useLoadingStatus from "../../hooks/loading";

const Tovars = () => {
    const dispatch = useDispatch();
    const tovars = useSelector(tovarsList);
    const showBasket = useSelector((state) => state.showBasket);
    const { loadingTovar, errorLoading } = useLoadingStatus();

useEffect(() => {
    dispatch(fetchTovars());
},[dispatch]) 

const renderTovars = useMemo(() =>{

      const list = tovars.map((item,id) => (
            <li key={item.id}>
                <div className="content_card">
                    <p className="title_card">{item.title}</p>
                    <p className="category_card">{item.category}</p>
                    <NavLink to="/InfoCard"  className="nav-link">
                        <img src={item.image} 
                             alt="card"
                             onClick={() => dispatch(selectCard(item,item.id))} />
                    </NavLink>
                    <div className="price_rating_card">
                         <p className="price_card">Price: {item.price} $</p>
                    </div>
                    <div className="del_card">X</div>
                    <button className="card_buy"
                            onClick={() => dispatch(addTovar(item))
                            }                     
                    >Buy</button>
                </div>
            </li>
        ))

    return <ul className="list">{list}</ul>
},[dispatch, tovars]) 
    
    return(<div className="content">
            <div className="filter">
                <Filter />
                <ShowDiscounts />
            </div>
            <div className="spinner_tovars">
                  {loadingTovar}
                  {errorLoading}
            </div> 
                {renderTovars}
                {showBasket && <BasketModal />}
           </div>)
}
export default Tovars;

