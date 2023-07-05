import { useSelector,useDispatch } from "react-redux"
import { infoTovar,addTovar } from "./tovarsSlice"
import { NavLink } from "react-router-dom"
import "./infocard.scss"

const InfoCard = () => {
    const dispatch = useDispatch();
    const card = useSelector(infoTovar)
   
    return (<div className="info_card_content">
             <img 
                  src={card.image} 
                  alt="card"
             />
              <div className="content_info_card">
                  <h2>{card.title}</h2>
                    <p className="category_info">Category: {card.category}</p>
                    <p className="description_info">{card.description}</p>
                    <p className="rating_info">Rating: {card?.rating && card.rating.rate}</p>
                    <p className="price_info">Price: {card.price} $</p>
                  <div className="buttons_info">
                      <button className="card_buy"
                              onClick={() => dispatch(addTovar(card))}>Buy</button>
                  <NavLink to="/tovars">
                      <button>Back to Tovars</button>
                  </NavLink>
                  </div>
              </div>
           </div>)
}
export default InfoCard