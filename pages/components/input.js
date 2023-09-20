import React from 'react';

const Input = ({type}) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;