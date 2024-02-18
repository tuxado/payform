import {
  ICreditCardFormNumber,
  TCreditCardFormNumberOptions,
} from "./CreditCardFormNumber";
import {
  ICreditCardFormCardholderName,
  TCreditCardFormCardholderNameOptions,
} from "./CreditCardFormCardholderName";
import {
  ICreditCardFormExpirationDate,
  TCreditCardFormExpirationDateOptions,
} from "./CreditCardFormExpirationDate";
import {
  ICreditCardFormSecurityCode,
  TCreditCardFormSecurityCodeOptions,
} from "./CreditCardFormSecurityCode";
import { ICreditCardFormNumberIcon } from "../views";

export interface ICreditCardFormOptions {
  num: TCreditCardFormNumberOptions;
  name: TCreditCardFormCardholderNameOptions;
  expiry: TCreditCardFormExpirationDateOptions;
  cvc: TCreditCardFormSecurityCodeOptions;
}

export interface ICreditCardForm {
  initialize(): void;
  isValid(): boolean;
  num(): ICreditCardFormNumber | undefined;
  expiry(): ICreditCardFormExpirationDate | undefined;
  name(): ICreditCardFormCardholderName | undefined;
  cvc(): ICreditCardFormSecurityCode | undefined;

  setNum(creditCardNumber: ICreditCardFormNumber): void;

  setExpiry(value: ICreditCardFormExpirationDate): void;
  setCvc(value: ICreditCardFormSecurityCode): void;

  setName(value: ICreditCardFormCardholderName): void;

  setNumIcon(value: ICreditCardFormNumberIcon): void;

  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}
