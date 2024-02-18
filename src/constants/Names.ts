import { TCreditCardNames } from "../../typings";

export const names: TCreditCardNames = {
  ax: "American Express",
  ds: "Discover Consumer Bank",
  dc: "Diners Club International",
  ca: "Mastercard",
  n: "Dankort",
  jc: "Japan Credit Bureau",
  to: "Maestro",
  vi: "Visa",
  cu: "UnionPay",
  unk: "Unknown",
  elo: "elo",
  ve: "visaelectron",
  ff: "forbrugsforeningen",
  hc: "hipercard",
  ls: "laser",
} as const;
