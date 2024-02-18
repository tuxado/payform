import { lengths } from "../constants/FormNumberLengths";
import { luhns } from "../constants/FormNumberLuhns";
import { patterns } from "../constants/FormNumberPatterns";
import { types } from "../constants/Types";
import { validateLuhn } from "./LuhnValidation";

export function validate(num: string, type?: string) {
  num = num.replace(/\D/g, "");

  if (!/^\d+$/.test(num)) {
    return false;
  }

  if (type === undefined) {
    const key = Object.keys(patterns).find((key) => {
      const pattern = patterns[key as keyof typeof patterns];

      if (pattern) {
        let re = new RegExp(pattern);
        if (num.match(re) != null) {
          return true;
        }
      }

      return false;
    });

    if (key === undefined) {
      return false;
    }

    type = types[key as keyof typeof types];
  }

  const key = Object.keys(types).find(
    (key) => types[key as keyof typeof types] === type
  );
  const length = lengths[key as keyof typeof lengths];
  const luhn = luhns[key as keyof typeof lengths];

  return length.includes(num.length) && (luhn === false || validateLuhn(num));
}
