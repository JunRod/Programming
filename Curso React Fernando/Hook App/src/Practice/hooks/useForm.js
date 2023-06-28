import { useState } from "react";

export const useForm = (initialForm = {}) => {

  const [value, setValue] = useState(initialForm);

  const handleInput = ({ target: { name, value } }) => {

    if(value < 1) {
        return
    } 

    setValue({
      [name]: value,
    });
  };

  return {
    handleInput,
    ...value,
  };
};
