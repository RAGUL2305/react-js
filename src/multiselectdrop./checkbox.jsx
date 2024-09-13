import React, { useState } from 'react';

function CheckboxComponent() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label>Check me</label>
    </div>
  );
}

export default CheckboxComponent;
