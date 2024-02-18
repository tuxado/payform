import { ICreditCardErrorNumber } from "./CreditCardErrorNumber";
import { ICreditCardErrorExpirationDate } from "./ICreditCardErrorExpirationDate";
import { ICreditCardErrorCardholderName } from "./ICreditCardErrorCardholderName";
import { ICreditCardErrorSecurityCode } from "./ICreditCardErrorSecurityCode";

export interface ICreditCardErrorOptions {
  isInvalid: string;
  subject?: string | Exclude<boolean, true>;
}

export interface ICreditCardError {
  initialize(): void;

  num(): ICreditCardErrorNumber | undefined;
  name(): ICreditCardErrorCardholderName | undefined;
  expiry(): ICreditCardErrorExpirationDate | undefined;
  cvc(): ICreditCardErrorSecurityCode | undefined;

  setNum(value: ICreditCardErrorNumber): void;
  setExpiry(value: ICreditCardErrorExpirationDate): void;
  setCvc(value: ICreditCardErrorSecurityCode): void;
  setName(value: ICreditCardErrorCardholderName): void;

  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}
