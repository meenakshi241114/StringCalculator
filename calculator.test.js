import {stringCalculator} from './StringCalculator';

describe('stringCalculator', () => {
  it('adds two numbers correctly', () => {
    expect(stringCalculator('1 + 2')).toBe(3);
  });

  it('subtracts two numbers correctly', () => {
    expect(stringCalculator('5 - 3')).toBe(2);
  });

  it('multiplies two numbers correctly', () => {
    expect(stringCalculator('4 * 3')).toBe(12);
  });

  it('divides two numbers correctly', () => {
    expect(stringCalculator('6 / 2')).toBe(3);
  });
});
