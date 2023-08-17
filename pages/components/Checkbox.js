  import React from 'react';

const Checkbox = ({ checked, onChange, label }) => {
    
    return (
      <label>
        <input type="checkbox" checked={checked}  onChange={onChange} />
        {label}
      </label>
    );
  };

  export default Checkbox;
