import operate from '../../logic/operator';

describe('operate', () => {
  it('should add two numbers', () => {
    const result = operate('2', '3', '+');
    expect(result).toBe('5');
  });

  it('should subtract two numbers', () => {
    const result = operate('5', '2', '-');
    expect(result).toBe('3');
  });

  it('should multiply two numbers', () => {
    const result = operate('4', '3', 'x');
    expect(result).toBe('12');
  });

  it('should divide two numbers', () => {
    const result = operate('10', '2', '÷');
    expect(result).toBe('5');
  });

  it('should handle division by 0', () => {
    const result = operate('10', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should calculate modulo', () => {
    const result = operate('10', '3', '%');
    expect(result).toBe('1');
  });

  it('should handle modulo with division by 0', () => {
    const result = operate('10', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operation', () => {
    expect(() => {
      operate('2', '3', '*');
    }).toThrow("Unknown operation '*'");
  });
});
