import { TCreditCardFormExpirationDateEventArgs } from "../controls";


export interface ICreditCardImageExpirationDate {
  initialize(): void;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

// Define the constructor interface
export interface ICreditCardImageExpirationDateConstructor {
  new (
    element: HTMLElement,
  ): ICreditCardImageExpirationDate;
}
