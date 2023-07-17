import { useDispatch, useSelector } from "react-redux";
import { basketTovar,
         deleteTovar,
         closeBasket,
         counterIncrement,
         counterDecrement,
         selectCard       
        } from "../tovars/tovarsSlice";
import BasketPage from "./BasketPage";
import { NavLink } from "react-router-dom";
import ShowDiscounts from "../modals/ShowDiscounts"
import "./basket.scss";
import { useEffect } from "react";
import { useRef } from "react";

const Basket = () => {
    const dispatch = useDispatch();
    const tovar = useSelector(basketTovar);
    const isBasketOpen = useSelector((state) => state.showBasket);
    const sumAllTovars = useSelector((state) => state.sum);
    const formattedSum = typeof sumAllTovars === 'number' ? sumAllTovars.toFixed(2) : '';
    
    const refModalPage = useRef();

    useEffect(() => {
        refModalPage.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [isBasketOpen]);

    const busketAdd = (arr) => {
          const current = arr.map((item, id) => (
            <div key={item.id} className="basket_item">
                <div className="image_link">
                <NavLink to="/InfoCard"  className="nav-link">
                    <img src={item.image} 
                         alt="card"
                         onClick={() => dispatch(selectCard(item))} />
                 </NavLink>
                </div>
                <div className="title-price">
                    <p>{item.title}</p>
                    <p>Price: {item.price} $</p>
                </div>
                <div className="counter_tovar">
                    <button className="minus"
                            onClick={() => dispatch(counterDecrement(id))}>-</button>
                       <div className="counter">{item.counter}</div>
                    <button className="plus"
                            onClick={() => dispatch(counterIncrement(id))}
                    >+</button>
                </div>
                <button 
                    onClick={() => dispatch(deleteTovar(item.id))}
                    className="delete_tovar_busket"
                >X</button>
            </div>
            ))
            
       return <div className="basket_content">
                   <div className="basket_close">
                       <p className="basket_text">Корзина</p>
                       <button 
                          onClick={() => dispatch(closeBasket())}
                       >X</button>
                   </div>
                   {current}
                   <div className="all_sum_busket">
                        <p>Общая сумма: {formattedSum} $</p>
                        <div ref={refModalPage} />
                    </div>
                    
              </div >
    }

    const basket_content = busketAdd(tovar) 

    return(<div>
      
              {!isBasketOpen && <div > <BasketPage basket={basket_content}/></div>} 
              { isBasketOpen &&
              <div className="basket_tovars">
                  <ShowDiscounts />
                   {basket_content}
              </div>  
           }
           </div>)
}
export default Basket;