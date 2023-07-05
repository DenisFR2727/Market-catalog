import { useState } from "react"

function  useInputWidthValidate(initialValue) {
      const [value, setValue] = useState(initialValue);

      const onChange = event => {
         setValue(event.target.value);
      }
      const validateInput = () => {
        return value.search(/\d/) >= 0
      }
     
      
      return {value,onChange,validateInput}
}

export default useInputWidthValidate;