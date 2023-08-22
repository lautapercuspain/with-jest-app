import React from 'react';

const Dropdown = ({ options, value, onChange, label }) => {
  const handleOnChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <div>
      <label htmlFor="dropdown">{label}</label>
      <select id="dropdown" value={value} onChange={handleOnChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;