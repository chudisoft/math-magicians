import React from 'react';
import CalculatorButton from './CalculatorButton';
import './Calculator.css';

const Calculator = () => {
  const acButtonClicked = () => {
  };

  const signButtonClicked = (sign) => {
    alert(sign);
  };

  const numberButtonClicked = (num) => {
    alert(num);
  };

  const buttons = [
    { text: 'AC', className: 'gray', click: (() => acButtonClicked) },
    { text: '+/-', className: 'gray', click: (() => signButtonClicked('+/-')) },
    { text: '%', className: 'gray', click: (() => signButtonClicked('%')) },
    { text: '/', className: 'orange', click: (() => signButtonClicked('/')) },
    { text: 7, className: 'gray', click: (() => numberButtonClicked(7)) },
    { text: 8, className: 'gray', click: (() => numberButtonClicked(8)) },
    { text: 9, className: 'gray', click: (() => numberButtonClicked(9)) },
    { text: 'x', className: 'orange', click: (() => signButtonClicked('x')) },
    { text: 4, className: 'gray', click: (() => numberButtonClicked(4)) },
    { text: 5, className: 'gray', click: (() => numberButtonClicked(5)) },
    { text: 6, className: 'gray', click: (() => numberButtonClicked(6)) },
    { text: '-', className: 'orange', click: (() => signButtonClicked('-')) },
    { text: 1, className: 'gray', click: (() => numberButtonClicked(1)) },
    { text: 2, className: 'gray', click: (() => numberButtonClicked(2)) },
    { text: 3, className: 'gray', click: (() => numberButtonClicked(3)) },
    { text: '+', className: 'orange', click: (() => signButtonClicked('+')) },
    { text: 0, className: 'gray w-2', click: (() => numberButtonClicked(0)) },
    { text: '.', className: 'gray', click: (() => numberButtonClicked('.')) },
    { text: '=', className: 'orange', click: (() => signButtonClicked('=')) },
  ];

  return (
    <div>
      <div className="input-section">
        <input type="text" defaultValue={0} id="txtInput" />
      </div>
      <div className="button-section">
        {
          buttons.map(
            (b) => (
              <CalculatorButton
                key={b.text}
                text={b.text}
                className={b.className}
                click={b.click}
              />
            ),
          )
        }
      </div>
    </div>
  );
};

Calculator.propTypes = {

};

Calculator.defaultProps = {
};

export default Calculator;
