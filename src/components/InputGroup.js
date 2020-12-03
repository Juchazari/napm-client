import React from 'react';
import { AiOutlineEye, AiFillEye } from 'react-icons/ai';
import './InputGroup.css';

function InputGroup({label, type, id, placeholder, value, onChange, revealer, setInputType}) {

  function passwordRevealer() {
    return (
      <div className="label-w-revealer">
        <label htmlFor={id}>{label}</label>
        <span>
          {type === "password" 
            ? 
              <AiOutlineEye onClick={() => setInputType('text')}/>
            : 
              <AiFillEye onClick={() => setInputType('password')}/>
          }
        </span>
      </div>
    );
  }

  return (
    <div className="input-group">
      {revealer ? passwordRevealer() : <label htmlFor={id}>{label}</label>}
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