import React from 'react';
import styled from 'styled-components';

const Group = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #888888;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 8px 16px;
  border: 1px solid #e0e6e8;
  border-radius: 4px;
  font-size: 1rem;
  color: #888888;
  transition: box-shadow 0.2s;
  &::placeholder {
    color: #dedede;
  }
  &:focus {
    box-shadow: 0 0 0 2px rgb(169, 172, 255, 0.5);
  }
`;

function Form({ children, ...props }) {
  return <form {...props}>{children}</form>;
}

Form.Group = function FormGroup({ controlId, children }) {
  const GroupChildren = React.Children.map(
    children,
    child => React.cloneElement(child, { controlId })
  );

  return <Group>{GroupChildren}</Group>;
};

Form.Label = function FormLabel({ controlId, children }) {
  return <Label htmlFor={controlId}>{children}</Label>;
};

Form.Input = function FormInput({ controlId, ...props }) {
  return <Input id={controlId} {...props} />;
};

export default Form;