import { TCreditCardFormNumberEventArgs } from "../controls";

export interface ICreditCardImageSwapColor {
  initialize(): void;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

// Define the constructor interface
export interface ICreditCardImageSwapColorConstructor {
  new (
    element: JQuery,
  ): ICreditCardImageSwapColor;
}
