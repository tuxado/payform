export const enum InitializeEventName {
  num = "cc::num::initialize",
  expiry = "cc::expiry::initialize",
  cvc = "cc::cvc::initialize",
  name = "cc::name::initialize",
}

export type TInitializeEventName = {
  [K in keyof typeof InitializeEventName]: (typeof InitializeEventName)[K];
};
