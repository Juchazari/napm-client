import React from 'react';
import './InputGroup.css';

function InputGroup({label, type, id, placeholder, value, onChange}) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        className="entry-inputfield"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputGroup;