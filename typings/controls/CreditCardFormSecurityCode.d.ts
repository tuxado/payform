import { type InputMaskElement } from "imask";

export type TCreditCardFormSecurityCodeEventArgs = {
  value: string;
  type: string;
  target : HTMLInputElement;
};

export type TCreditCardFormSecurityCodeOptions = {
  selector: string;
};

export interface ICreditCardFormSecurityCode {
  initialize(): void;
  mask(): void;
  registerEvents(): void;
  isValid(): boolean;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

// Define the constructor interface
export interface ICreditCardFormSecurityCodeConstructor {
  new (private element: HTMLInputElement): ICreditCardFormSecurityCode;
}
