/* eslint-disable prefer-const */
import { generatePassword } from './password-gen';

describe('generatePassword', () => {
  it('should return a string', () => {
    const result = generatePassword(10);
    expect(typeof result).toBe('string');
  });

  it('should return a string of the correct length', () => {
    const length = 10;
    const result = generatePassword(length);
    expect(result.length).toBe(length);
  });

  it('should only contain valid characters', () => {
    const validCharacters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const result = generatePassword(10);
    for (let char of result) {
      expect(validCharacters.includes(char)).toBe(true);
    }
  });
});
