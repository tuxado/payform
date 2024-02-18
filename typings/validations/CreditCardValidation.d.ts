import { ICreditCardValidationNumber } from "./CreditCardValidationNumber";
import { ICreditCardValidationCardholderName } from "./CreditCardValidationCardholderName";
import { ICreditCardValidationExpirationDate } from "./CreditCardValidationExpirationDate";
import { ICreditCardValidationSecurityCode } from "./CreditCardValidationSecurityCode";

export interface ICreditCardValidation {
  initialize(): void;

  num(): ICreditCardValidationNumber | undefined;
  name(): ICreditCardValidationCardholderName | undefined;
  expiry(): ICreditCardValidationExpirationDate | undefined;
  cvc(): ICreditCardValidationSecurityCode | undefined;

  setNum(value: ICreditCardValidationNumber): void;
  setExpiry(value: ICreditCardValidationExpirationDate): void;
  setCvc(value: ICreditCardValidationSecurityCode): void;
  setName(value: ICreditCardValidationCardholderName): void;

  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}
