import { TCreditCardFormCardholderNameEventArgs } from "../controls";

export interface ICreditCardImageCardholderName {
  initialize(): void;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

// Define the constructor interface
export interface ICreditCardImageCardholderNameConstructor {
  new (
    element: JQuery,
  ): ICreditCardImageCardholderName;
}
