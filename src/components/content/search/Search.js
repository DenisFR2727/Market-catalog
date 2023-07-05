import { useDispatch } from "react-redux";
import { searchTovars, } from "../tovars/tovarsSlice";
import { useState, useTransition } from "react";

import "./search.scss";

const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
         startTransition(() => {
            const searchTovar = e.target.value
            setSearch(searchTovar);
            dispatch(searchTovars(search))
         })                 
   }
    return (<div className="search_tovars">
                <input type="text"
                       placeholder="search"
                       onChange={handleChange} />
                <p>{isPending && <span>Loading...</span>} </p>
                       
           </div>)
}
export default Search;