import { ICreditCardImageOptions } from "../../typings";

export const defaultImageOptions: ICreditCardImageOptions = {
  card: '[role="cc-image-wrapper"]',
  informations: {
    num: '[role="cc-num-info"]',
    // creditCardNumber: '[role="credit-card-image-number"]',
    /*
    creditCardCardholderName: {
      front: '[role="credit-card-image-front-cardholder-name"]',
      back: '[role="credit-card-image-back-cardholder-name"]',
    },
    */
    // creditCardCardholderName: '[role="cc-type-info"]',

    name: '[role="cc-name-info"]',
    // creditCardCardholderName: '[role="credit-card-image-cardholder-name"]',
    expiry: '[role="cc-expiry-info"]',
    // creditCardExpirationDate: '[role="credit-card-image-expiration-date"]',
    cvc: '[role="cc-cvc-info"]',
    // creditCardSecurityCode: '[role="credit-card-image-security-code"]',
  },
};
