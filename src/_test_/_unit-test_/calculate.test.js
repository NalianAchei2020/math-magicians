import calculate from '../../logic/merncalculate';
import operate from '../../logic/operator';

describe('calculate', () => {
  it('should clear the calculator data when "AC" button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should update "next" when a number button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '3');
    expect(result).toEqual({ total: '10', next: '53', operation: '+' });
  });

  it('should handle "0" button when "next" is "0"', () => {
    const result = calculate({ total: '10', next: '0', operation: '+' }, '0');
    expect(result).toEqual({});
  });

  it('should update "next" when "." button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '.');
    expect(result).toEqual({ total: '10', next: '5.', operation: '+' });
  });

  it('should handle "." button when "next" already contains "."', () => {
    const result = calculate({ total: '10', next: '5.2', operation: '+' }, '.');
    expect(result).toEqual({ total: '10', next: '5.2', operation: '+' });
  });

  it('should handle "." button when "next" is null and "operation" exists', () => {
    const result = calculate({ total: '10', next: null, operation: '+' }, '.');
    expect(result).toEqual({ total: '10', next: '0.', operation: '+' });
  });

  it('should handle "=" button when "next" and "operation" exist', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    const expectedTotal = operate('10', '5', '+');
    expect(result).toEqual({
      total: expectedTotal,
      next: null,
      operation: null,
    });
  });

  it('should handle "=" button when "next" and "operation" do not exist', () => {
    const result = calculate({ total: '10', next: '5', operation: null }, '=');
    expect(result).toEqual({});
  });

  it('should handle "+/-" button when "next" exists', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '+/-');
    expect(result).toEqual({ total: '10', next: '-5', operation: '+' });
  });

  it('should handle "+/-" button when "total" exists', () => {
    const result = calculate(
      { total: '10', next: null, operation: '+' },
      '+/-',
    );
    expect(result).toEqual({ total: '-10', next: null, operation: '+' });
  });

  it('should handle an operation button when "next" and "operation" exist', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '-');
    const expectedTotal = operate('10', '5', '+');
    expect(result).toEqual({
      total: expectedTotal,
      next: null,
      operation: '-',
    });
  });

  it('should handle an operation button when "total" exists and "next" does not', () => {
    const result = calculate({ total: '10', next: null, operation: '+' }, '-');
    expect(result).toEqual({ total: '10', next: null, operation: '-' });
  });

  it('should handle an operation button when "operation" exists and "total" and "next" are present', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '*');
    const expectedTotal = operate('10', '5', '+');
    expect(result).toEqual({
      total: expectedTotal,
      next: null,
      operation: '*',
    });
  });
});
