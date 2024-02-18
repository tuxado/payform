import { type InputMaskElement } from "imask";

export type TCreditCardFormCardholderNameEventArgs = {
  value: string;
  target : HTMLInputElement;
};

export type TCreditCardFormCardholderNameOptions = {
  selector: string;
};

export interface ICreditCardFormCardholderName {
  initialize(): void;
  registerEvents(): void;
  isValid(): boolean;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

// Define the constructor interface
export interface ICreditCardFormCardholderNameConstructor {
  new (element: HTMLInputElement): ICreditCardFormCardholderName;
}
