import { TCreditCardFormSecurityCodeLengths } from "../../typings";

export const lengths: TCreditCardFormSecurityCodeLengths = {
  elo: [3],
  ve: [3],
  to: [3],
  ff: [3],
  n: [3],
  vi: [3],
  ca: [3],
  ax: [4],
  hc: [3],
  dc: [3],
  ds: [3],
  cu: [3],
  jc: [3],
  ls: [3],
  unk: [3,4],
} as const;
