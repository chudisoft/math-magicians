import operate from './operate';

test('Test Operate', () => {
  let calculatorData = {
    total: null,
    next: null,
    operation: null,
  };
  calculatorData = operate(1, 2, '+');
  expect(calculatorData).toBe('3');
});
