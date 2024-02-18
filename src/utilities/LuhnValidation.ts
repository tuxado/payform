export function validateLuhn(num: string): boolean {
  let odd: boolean = true;
  let sum: number = 0;
  const digits: string[] = (num + "").split("").reverse();
  const len: number = digits.length;
  for (let j = 0; j < len; j++) {
    let digit: number = parseInt(digits[j], 10);

    if ((odd = !odd)) {
      digit *= 2;
    }
    if (digit > 9) {
      digit -= 9;
    }
    sum += digit;
  }
  return sum % 10 === 0;
}
