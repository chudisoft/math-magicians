import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const CalculatorButton = ({ click, text, className }) => {
  CalculatorButton.propTypes = {
    text: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
  };

  return (
    <button
      type="button"
      onClick={click}
      className={className}
    >
      {text}
    </button>
  );
};

export default CalculatorButton;
