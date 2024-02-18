import { TCreditCardFormNumberLengths } from "../../typings";

export const lengths: TCreditCardFormNumberLengths = {
  elo: [16],
  ve: [16],
  to: [12, 13, 14, 15, 16, 17, 18, 19],
  ff: [16],
  n: [16],
  vi: [13, 14, 15, 16, 17, 18, 19],
  ca: [16],
  ax: [15],
  hc: [13, 14, 15, 16, 17, 18, 19],
  dc: [14],
  ds: [16],
  cu: [16, 17, 18, 19],
  jc: [15, 16, 17, 18, 19],
  ls: [16, 17, 18, 19],
  unk: [13, 14, 15, 16, 17, 18, 19],
} as const;
