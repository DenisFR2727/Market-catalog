import { useState } from "react"
import { useDispatch } from "react-redux";
import { addDiscountUser } from "../content/tovars/tovarsSlice";
import { v4 as uuidv4} from "uuid";

import "../content/modals/showdiscounts.scss"

function  useInputWidthValidate(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [hiddenModal, setHiddenModal] = useState(false)
  const dispatch = useDispatch(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      id:uuidv4(),
      [name]: value,
    }));
  }
  const handleSubmit = (e) => {
       e.preventDefault();
       const {name, email} = value;
       if(name.length <= 0 || email.length <= 0){
          return false;
       }
       if(name.length >= 0 || email.length >= 0){
        setHiddenModal(true)
       }
       dispatch(addDiscountUser(value));
      
       setValue({name: "", email: ""})
  };
  const validate = () => {
       const {name, email} = value;
        if(name.length <= 0){
            return <p className="inValid_name_desc">Fill in the name field</p>
        }
        else if(email.length <= 0){
            return <p className="inValid_email_desc">Fill in the email field</p>
        }
  }
  const borderError = () => {
       const {name, email} = value;
      
       if(name.length <= 0){
          return true
       }if(email.length <= 0){
          return true
       }else{
          return false
       } 
  }
  return { value,
           handleSubmit,
           handleChange,  
           validate, 
           borderError, 
           hiddenModal };
}
export default useInputWidthValidate;