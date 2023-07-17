import { useDispatch } from "react-redux";
import { searchTovars, } from "../tovars/tovarsSlice";
import { useState, useTransition, useEffect } from "react";

import "./search.scss";

const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [isPending, startTransition] = useTransition();

useEffect(() => {
   const delay = setTimeout(() => {
      startTransition(() => {
         dispatch(searchTovars(search))
      })
         
   },300)

   return () => {
      clearTimeout(delay)
   };
}, [search, startTransition, dispatch]);

    const handleChange = (e) => {
            const searchTovar = e.target.value
            setSearch(searchTovar);              
   }
    return (<div className="search_tovars">
                <input type="text"
                       placeholder="search"
                       onChange={handleChange} />
                <p>{isPending && <span>Loading...</span>} </p>
                       
           </div>)
}
export default Search;