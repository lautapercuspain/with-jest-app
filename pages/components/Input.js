import React from 'react';

function TextInput(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default TextInput;