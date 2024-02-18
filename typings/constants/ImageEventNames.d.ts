export const enum ImageEventName {
  flipped = "cc::card::flipped",
}

export type TImageEventName = {
  [K in keyof typeof ImageEventName]: (typeof ImageEventName)[K];
};
