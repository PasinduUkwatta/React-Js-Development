import { useReducer, useState } from "react";

const intialInputState = { value: "", isTouch: false };
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouch: state.isTouch,
    };
  }
  if (action.type === "BLUR") {
    return {
      isTouch: true,
      value: state.value,
    };
  }
  if (action.type === "RESET") {
    return {
      isTouch: false,
      value: "",
    };
  }
  return intialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, {});

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouch;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return {
    value: inputState.value,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: valueIsValid,
    reset,
  };
};

export default useInput;
