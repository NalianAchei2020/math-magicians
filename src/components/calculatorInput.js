import React from 'react';
import PropTypes from 'prop-types';

function CalculatorInput({ displayValue }) {
  return (
    <div>
      <input type="text" value={displayValue} readOnly />
    </div>
  );
}
CalculatorInput.propTypes = {
  displayValue: PropTypes.string.isRequired,
};

export default CalculatorInput;
