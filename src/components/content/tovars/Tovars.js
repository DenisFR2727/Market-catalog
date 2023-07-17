import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useCallback, useRef,  } from "react";
import { NavLink } from "react-router-dom";
import {
        fetchTovars,
        tovarsList,
        selectCard,
        addTovar,
        nextDisplayedTovars,
        backDisplayedTovars,
} from "./tovarsSlice";
import "./tovars.scss";
import BasketModal from "../basket/BasketModal";
import Filter from "../filter/Filter";
import ShowDiscounts from "../modals/ShowDiscounts.js";
import useLoadingStatus from "../../hooks/loading";
import Pagination from "../pagination/Pagination";

const Tovars = () => {
    const dispatch = useDispatch();
    const tovars = useSelector(tovarsList);
    const showBasket = useSelector((state) => state.showBasket);
    const displayedTovars = useSelector((state) => state.displayedTovars)

    const { loadingTovar, errorLoading } = useLoadingStatus();
    const listRef = useRef(null);

useEffect(() => {
    dispatch(fetchTovars());
},[dispatch])

useEffect(() => {
      listRef.current?.scrollIntoView()
  }, [tovars,displayedTovars]);

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
        )).slice(0, displayedTovars)

    return <ul className="list">{list}
               <div ref={listRef}></div>
           </ul>
},[dispatch, tovars, displayedTovars]) 

const nextClickTovars = useCallback(() => {
      dispatch(nextDisplayedTovars(displayedTovars + 6))
},[dispatch, displayedTovars])

const backClickTovars = useCallback(() => {
      if(displayedTovars <= 6){
        return false;
      }
      dispatch(backDisplayedTovars(displayedTovars - 6)) 
},[dispatch, displayedTovars])

    return(<div className="content">
            <div className="filter">
                <Filter />
                <ShowDiscounts />
            </div>
            <div className="spinner_tovars">
                  {loadingTovar}
                  {errorLoading}
            </div>
             <div className="content_tovars_pagination" >
                <Pagination nextTovars={nextClickTovars}
                            backTovars={backClickTovars}
                 />
                  {renderTovars}
                <Pagination nextTovars={nextClickTovars}
                            backTovars={backClickTovars}
                 />
             </div> 
                  {showBasket && <BasketModal />}
           </div>)
}
export default Tovars;

