import { ICreditCardFormOptions, ICreditCardForm } from "../controls";
import {
  ICreditCardImageOptions,
  ICreditCardErrorOptions,
  ICreditCardImage,
  ICreditCardError,
} from "../views";

export type TCreditCardType =
  | "elo"
  | "ve"
  | "ff"
  | "hc"
  | "ls"
  | "ax"
  | "ds"
  | "dc"
  | "ca"
  | "n"
  | "jc"
  | "to"
  | "vi"
  | "cu"
  | "unk";

export type TCreditCardNames = Record<TCreditCardType, string>;

export interface ICreditCardOptions {
  form: ICreditCardFormOptions;
  error: ICreditCardErrorOptions | Exclude<boolean, true> | undefined;
  image: ICreditCardImageOptions | Exclude<boolean, true> | undefined;
}

export interface ICreditCard {
  initialize(): void;
  setForm(form: ICreditCardForm): void;
  setImage(image: ICreditCardImage): void;
  setError(error: ICreditCardError): void;
  setValidation(error: ICreditCardError): void;
  isValid(): boolean;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

// Define the constructor interface
export interface ICreditCardConstructor {
  new (element: InputMaskElement, options: ICreditCardOptions): ICreditCard;
}
