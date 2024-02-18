import { lengths } from "../constants/FormSecurityCodeLengths";
import { types } from "../constants/Types";

export function validate(cvc: string, type?: string) {
  if (type === undefined || type === null) {
    type = types.unk;
  }

  if (!/^\d+$/.test(cvc)) {
    return false;
  }

  const key = Object.keys(types).find(
    (key) => types[key as keyof typeof types] === type
  );
  const length = lengths[key as keyof typeof lengths];

  return length.includes(cvc.length);
}
