import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import './Calculator.css';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttonClicked = (num) => {
    const newData = calculate(calculatorData, num);
    setCalculatorData(newData);
  };

  const buttons = [
    { text: 'AC', className: 'gray', click: (() => buttonClicked('AC')) },
    { text: '+/-', className: 'gray', click: (() => buttonClicked('+/-')) },
    { text: '%', className: 'gray', click: (() => buttonClicked('%')) },
    { text: '÷', className: 'orange', click: (() => buttonClicked('÷')) },
    { text: '7', className: 'gray', click: (() => buttonClicked('7')) },
    { text: '8', className: 'gray', click: (() => buttonClicked('8')) },
    { text: '9', className: 'gray', click: (() => buttonClicked('9')) },
    { text: 'x', className: 'orange', click: (() => buttonClicked('x')) },
    { text: '4', className: 'gray', click: (() => buttonClicked('4')) },
    { text: '5', className: 'gray', click: (() => buttonClicked('5')) },
    { text: '6', className: 'gray', click: (() => buttonClicked('6')) },
    { text: '-', className: 'orange', click: (() => buttonClicked('-')) },
    { text: '1', className: 'gray', click: (() => buttonClicked('1')) },
    { text: '2', className: 'gray', click: (() => buttonClicked('2')) },
    { text: '3', className: 'gray', click: (() => buttonClicked('3')) },
    { text: '+', className: 'orange', click: (() => buttonClicked('+')) },
    { text: '0', className: 'gray w-2', click: (() => buttonClicked('0')) },
    { text: '.', className: 'gray', click: (() => buttonClicked('.')) },
    { text: '=', className: 'orange', click: (() => buttonClicked('=')) },
  ];

  return (
    <div className="container col-md-12">
      <div className="bg-light">
        <h2>Calculator</h2>
        <p className="p-0">
          Let&apos;s do some maths
        </p>
      </div>
      <div className="row center">
        <div className="calculator">
          <div className="input-section">
            <input
              type="text"
              defaultValue={0}
              id="txtInput"
              disabled
              value={calculatorData.next || calculatorData.total || '0'}
            />
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
      </div>
    </div>
  );
};

Calculator.propTypes = {

};

Calculator.defaultProps = {
};

export default Calculator;
