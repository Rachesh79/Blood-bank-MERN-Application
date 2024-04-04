import React from 'react'

const InputType = ({ labelText, labelFor,inputType, value, onChange, name }) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor={labelFor} className="form-label">
          {labelText}
        </label>
        <input
          type="email"
          className="form-control"
          name=""
          // value={}
          // onChange={}
        />
      </div>
    </div>
  );
};

export default InputType
