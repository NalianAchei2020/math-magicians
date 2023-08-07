/* eslint-disable react/prop-types */
import React from 'react';

function CalculatorInput({ displayValue }) {
  return (
    <div>
      <input type="text" value={displayValue} readOnly />
    </div>
  );
}

export default CalculatorInput;
