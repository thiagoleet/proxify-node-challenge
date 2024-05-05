/**
 * Generates a random password of a given length
 *
 * @export
 * @param {number} passwordLength Password length
 * @return {*}  {string}
 */
export function generatePassword(passwordLength: number): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < passwordLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
