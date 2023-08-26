import React, { useState } from 'react';

const Input = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  }

  return (
    <input type="text" value={inputValue} onChange={handleChange} />
  );
};

export default Input;