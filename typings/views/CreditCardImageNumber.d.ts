import { TCreditCardFormNumberEventArgs } from "../controls";

export interface ICreditCardImageNumber {
  initialize(): void;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

// Define the constructor interface
export interface ICreditCardImageNumberConstructor {
  new (
    element: HTMLElement,
  ): ICreditCardImageNumber;
}
