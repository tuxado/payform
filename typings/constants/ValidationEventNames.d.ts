export const enum ValidationEventName {
  num = "cc::num::validation",
  expiry = "cc::expiry::validation",
  cvc = "cc::cvc::validation",
  name = "cc::name::validation",
}

export type TValidationEventName = {
  [K in keyof typeof ValidationEventName]: (typeof ValidationEventName)[K];
};
