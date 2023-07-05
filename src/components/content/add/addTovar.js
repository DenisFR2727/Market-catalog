import { useDispatch } from "react-redux"; 
import { useState,useRef,useEffect }  from "react";
import { addNewTovar } from "../tovars/tovarsSlice";
import { v4 as uuidv4 } from 'uuid';

import "./addtovar.scss";

const AddTovar = () => {
    const [formValues, setFormValues] = useState({});
    const dispatch = useDispatch();
    const refFocus = useRef(null);

useEffect(() => {
    refFocus.current.focus();
},[])

    const handleSubmit = (e) => {
      e.preventDefault();
        const newTovar = {
            id: uuidv4(),
            category: formValues.category,
            description: formValues.description,
            price: +formValues.price,
            title: formValues.title,
            image: formValues.image,
            rating:{rate: 0, count: 120}
        };
        
        dispatch(addNewTovar(newTovar));
        console.log(newTovar);
        setFormValues({
            category: "",
            description: "",
            price: "",
            title: "",
            image: "",
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          [name]: value 
        })); 
    };

    return (
        <div className="add-tovar-container">
        <form onSubmit={handleSubmit}>
          <div className="form_container">
            <p>Category:</p>
        <input type="text"
               name="category"
               value={formValues.category || ""}
               onChange={handleChange}
               ref={refFocus} />
          </div>
          <div className="form_container">
            <p>Decription:</p>
        <input type="text"
               name="description"
               value={formValues.description || ""}
               onChange={handleChange} />
          </div>
          <div className="form_container">
            <p>Price:</p>
        <input type="number"
               name="price"
               value={formValues.price}
               onChange={handleChange} />
         </div>
          <div className="form_container">
            <p>Title:</p>
        <input type="text"
               name="title"
               value={formValues.title || ""}
               onChange={handleChange} />
          </div>
          <div className="form_container">
           <p>Image:</p>
        <input type="text"
               name="image"
               value={formValues.image || ""}
               onChange={handleChange} />
          </div>
          <button>Add New Tovar</button>
        </form>
      </div>
    );
}
export default AddTovar;