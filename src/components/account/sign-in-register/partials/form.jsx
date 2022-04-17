import React from "react";
import "./form.scss";

const FormInput = ({ changeHandler, label, ...otherProps }) => {
  return (
  <div className="form-wrapper">
      <input className="form-input" onChange={changeHandler} {...otherProps} />
      {label && (
        <label 
        className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>
            {label}
        </label>
      )}
  </div>
  )};

export default FormInput;