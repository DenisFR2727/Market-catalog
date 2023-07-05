import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addDiscountUser } from "../tovars/tovarsSlice";

import "./showdiscounts.scss";

const Discounts = () => {
  const dispatch = useDispatch();
  const [nameUserDisc, setUserDisc] = useState("");
  const [emailUserDisc, setEmailUserDisc] = useState("");
  const [showModal, setShowModal] = useState(false);
  const addBasketTovar = useSelector(state => state.basket)

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDiscountUser = {
      id: uuidv4(),
      name: nameUserDisc,
      email: emailUserDisc
    }
    if(newDiscountUser.name.length <= 0 || newDiscountUser.email.length <= 0){
        return false;
    }else{
        dispatch(addDiscountUser(newDiscountUser))
        setUserDisc("");
        setEmailUserDisc("");
        setShowModal(false);
    }
  }

  const handleUserDiscount = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setUserDisc(value);
    }else if (name === "email") {
      setEmailUserDisc(value);
    }
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 100000);

    return () => clearTimeout(timer);
  }, [addBasketTovar]);


    return (
        <div className={`discounts_modal ${showModal ? '' : 'hidden'}`}>
            <div className="discounts_modal_content" >
            <button className="close_button" onClick={handleCloseModal}></button>
              <h3>Discounts 30%</h3>
              <p>Send your email and get a discount</p>
              <form onSubmit={handleSubmit}>
                   <input type="text"
                          name="name" 
                          placeholder="name"
                          value={nameUserDisc}
                          onChange={handleUserDiscount}/>
                   <input type="email" 
                          placeholder="email"
                          name="email"
                          value={emailUserDisc}
                          onChange={handleUserDiscount} />
                   <button>Send</button>
              </form>
            </div>
        </div>
    )
}
export default Discounts;