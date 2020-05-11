import React from "react";

const Input = React.memo((props) => {
    const { isValid, isTouched, type, inputId, name, aria, required, placeholder, onChange, value } = props;
  return (
    <div className='input-wrapper'>
      <input
        className={`${(isValid && isTouched) || !isTouched ? "" : "input-error"}`}
        type={type}
        id={inputId}
        name={name}
        aria-labelledby={aria}
        aria-label={aria}
        title={aria}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></input>
      <div className={`${(isValid && isTouched) || !isTouched ? "" : "error-symbol"}`}></div>
      <div className={`error${(isValid && isTouched) || !isTouched ? '-hidden' : '-visible'}`}>{props.errorMessage}</div>
    </div>
  );
});

export default Input;
