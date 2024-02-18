export const enum FormEventName {
  num = "cc::num::change",
  expiry = "cc::expiry::change",
  cvc = "cc::cvc::change",
  name = "cc::name::change",
}

export type TFormEventName = {
  [K in keyof typeof FormEventName]: (typeof FormEventName)[K];
};
