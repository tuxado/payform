import { ICreditCardImageNumber } from "./CreditCardImageNumber";
import { ICreditCardImageCardholderName } from "./CreditCardImageCardholderName";
import { ICreditCardImageExpirationDate } from "./CreditCardImageExpirationDate";
import { ICreditCardImageSecurityCode } from "./CreditCardImageSecurityCode";
import { ICreditCardImageSwapColor } from "./CreditCardImageSwapColor";
import { ICreditCardImageContainer } from "./CreditCardImageContainer";

export type TCreditCardImageSelectorsOptions = {
  num: string;
  // creditCardCardholderName: { front: string; back: string };
  name: string;
  expiry: string;
  cvc: string;
};

export interface ICreditCardImageOptions {
  card: string;
  informations?: TCreditCardImageSelectorsOptions;
}

export interface ICreditCardImage {
  initialize(): void;
  // registerEvents(): void;

  num(): ICreditCardImageNumber | undefined;
  name(): ICreditCardImageCardholderName | undefined;
  expiry(): ICreditCardImageExpirationDate | undefined;
  cvc(): ICreditCardImageSecurityCode | undefined;

  setContainer(creditCardImageContainer: ICreditCardImageContainer): void;
  setIcon(creditCardImageIcon: ICreditCardImageIcon): void;
  setSwapColor(
    creditCardImageSwapColor: ICreditCardImageSwapColor
  ): void;
  setNum(creditCardImageNumber: ICreditCardImageNumber): void;
  setExpiry(
    creditCardImageExpirationDate: ICreditCardImageExpirationDate
  ): void;
  setCvc(
    creditCardImageSecurityCode: ICreditCardImageSecurityCode
  ): void;
  setName(
    creditCardImageCardholderName: ICreditCardImageCardholderName
  ): void;

  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

// Define the constructor interface
export interface ICreditCardImageConstructor {
  new (
    element: InputMaskElement,
    options: ICreditCardImageOptions
  ): ICreditCardImage;
}
