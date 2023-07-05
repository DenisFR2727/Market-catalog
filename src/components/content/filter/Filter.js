import { useDispatch,useSelector } from "react-redux";
import { filterCategory,filterPrice } from "../tovars/tovarsSlice";
import { useState } from "react";

import "./filter.scss";

const Filter = () => {
const dispatch = useDispatch();
const [priceValues, setPriceValues] = useState({ fromPrice: "", toPrice: "" });
const selectOption = useSelector((state) => state.tovars.selectOption);

const handleOption = (e) => {
      const selectedCategory = e.target.value;
      dispatch(filterCategory(selectedCategory));
}
const changePrice = (e) => {
      e.preventDefault();
      const from = parseFloat(priceValues.fromPrice);
      const to = parseFloat(priceValues.toPrice);

      if(priceValues.fromPrice.length === 0 && priceValues.toPrice.length === 0){
          return false;
      }
            dispatch(filterPrice({ from, to }));
            setPriceValues({
                  fromPrice:"",
                  toPrice: ""
            })
}
const handlePriceChange = (e) => {
      const { name, value } = e.target;
      setPriceValues((prevValues) => ({ ...prevValues, [name]: value }));
}
    return (<div className="filter_menu">
               <div className="content_filter">
                <p>Select category:</p> 
                    <select name="" id=""
                    value={selectOption}
                            onChange={handleOption}>
                      <option value="All">All</option>
                      <option value="men's clothing">men's clothing</option>
                      <option value="women's clothing">women's clothing</option>
                      <option value="electronics">electronics</option>
                      <option value="jewelery">jewelery</option>
                    </select>
               <form onSubmit={changePrice}>
                     <p>Filter Price:</p>
                     <div className="from-price">
                        <p>from: </p>
                        <input type="number"
                               name="fromPrice"
                               value={priceValues.fromPrice}
                               onChange={handlePriceChange} 
                        />
                     </div>
                     <div className="to-price">
                        <p>to: </p>
                        <input type="number"
                              name="toPrice"
                              value={priceValues.toPrice}
                              onChange={handlePriceChange} 
                        />
                     </div>
                     <button>filter price</button>
               </form>
               </div>
          </div>)
}
export default Filter;
