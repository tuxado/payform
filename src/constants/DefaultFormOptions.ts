import { ICreditCardFormOptions } from "../../typings";

export const defaultFormOptions: ICreditCardFormOptions = {
  num: {
    selector: '[role="cc-num-field"]',
    // selector: '[role="credit-card-number"]',
    mask: { separator: " " },
    icon: '[role="cc-num-field-icon"]',
    // icon: '[role="credit-card-number-icon"]',
  },
  name: {
    selector: '[role="cc-name-field"]',
    // selector: '[role="credit-card-cardholder-name"]',
  },
  expiry: {
    selector: '[role="cc-expiry-field"]',
    // selector: '[role="credit-card-expiration-date"]',
  },
  cvc: {
    selector: '[role="cc-cvc-field"]',
    // selector: '[role="credit-card-security-code"]',
  },
};
