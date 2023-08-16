import calculate from './calculate';

describe('Test cases for calculate:', () => {
  test('Case 1: Addition', () => {
    let calculatorData = {
      total: null,
      next: null,
      operation: null,
    };
    calculatorData = calculate(calculatorData, '1');
    calculatorData = calculate(calculatorData, '+');
    calculatorData = calculate(calculatorData, '2');
    calculatorData = calculate(calculatorData, '=');
    expect(calculatorData.total).toBe('3');
  });

  test('Case 2: Subtract', () => {
    let calculatorData = {
      total: null,
      next: null,
      operation: null,
    };
    calculatorData = calculate(calculatorData, '4');
    calculatorData = calculate(calculatorData, '-');
    calculatorData = calculate(calculatorData, '2');
    calculatorData = calculate(calculatorData, '=');
    expect(calculatorData.total).toBe('2');
  });

  test('Case 3: Multiply', () => {
    let calculatorData = {
      total: null,
      next: null,
      operation: null,
    };
    calculatorData = calculate(calculatorData, '4');
    calculatorData = calculate(calculatorData, 'x');
    calculatorData = calculate(calculatorData, '2');
    calculatorData = calculate(calculatorData, '=');
    expect(calculatorData.total).toBe('8');
  });

  test('Case 4: Divide', () => {
    let calculatorData = {
      total: null,
      next: null,
      operation: null,
    };
    calculatorData = calculate(calculatorData, '10');
    calculatorData = calculate(calculatorData, '÷');
    calculatorData = calculate(calculatorData, '2');
    calculatorData = calculate(calculatorData, '=');
    expect(calculatorData.total).toBe('5');
  });
});
