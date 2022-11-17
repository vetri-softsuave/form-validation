import { useState } from "react";

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const entereValueIsValid = validate(enteredValue);
  const inputIsInvalid = !entereValueIsValid && inputIsTouched;

  const inputChangeHandler = (event) => {
    setInputIsTouched(true);
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setInputIsTouched(false);
    setEnteredValue("");
  };
  return {
    value: enteredValue,
    isValid: entereValueIsValid,
    inputIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
