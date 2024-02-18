import { TCreditCardFormSecurityCodeEventArgs } from "../controls";

export interface ICreditCardImageSecurityCode {
  initialize(): void;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

// Define the constructor interface
export interface ICreditCardImageSecurityCodeConstructor {
  new (
    element: HTMLElement,
  ): ICreditCardImageSecurityCode;
}
