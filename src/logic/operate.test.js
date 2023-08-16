import operate from './operate';

describe('Test cases for operations', () => {
  test('Case 1: Addition', () => {
    let calculatorData = {
      total: null,
      next: null,
      operation: null,
    };
    calculatorData = operate(1, 2, '+');
    expect(calculatorData).toBe('3');
  });

  test('Case 2: Subtraction', () => {
    expect(operate('10', '5', '-')).toBe('5');
  });

  test('Case 3: Number divide by 0', () => {
    expect(operate('1', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('Case 4: number divide by modulus', () => {
    expect(operate('1', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
