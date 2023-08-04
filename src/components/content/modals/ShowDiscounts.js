import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./showdiscounts.scss";
import useInputWidthValidate from "../../hooks/form";

const Discounts = () => {
  const [showModal, setShowModal] = useState(false);
  const addBasketTovar = useSelector(state => state.basket)
  
  const {value, handleSubmit, handleChange, validate, borderError, hiddenModal } = useInputWidthValidate({id:"", name:"", email:""});
  
  const errors = validate();
   
  const handleCloseModal = () => {
    setShowModal(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [addBasketTovar]);


    return (
        <div className={`discounts_modal ${showModal ? '' : 'hidden'} ${showModal && hiddenModal ? 'hidden' : ''}`}>
            <div className="discounts_modal_content" >
            <button className="close_button" onClick={handleCloseModal}></button>
              <h3>Discounts 30%</h3>
              <p>Send your email and get a discount</p>
              <form onSubmit={handleSubmit}>
                   <input type="text"
                          name="name" 
                          placeholder="name"
                          value={value.name}
                          onChange={handleChange}
                          className={borderError && value.name.length <= 0 ? "error_border" : ""}/>
                   <input type="email" 
                          placeholder="email"
                          name="email"
                          value={value.email}
                          onChange={handleChange}
                          className={borderError && value.email.length <= 0 ? "error_border" : ""} />
                          {errors}
                   <button>Send</button>
              </form>
            </div>
        </div>
    )
}
export default Discounts;
