import calculate from './calculate';

test('Test Calculate', () => {
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
