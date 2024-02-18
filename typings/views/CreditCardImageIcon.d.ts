import { TCreditCardFormNumberEventArgs } from "../controls";

export interface ICreditCardImageIcon {
  initialize(): void;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

// Define the constructor interface
export interface ICreditCardImageIconConstructor {
  new (private element: InputMaskElement): ICreditCardImageIcon;
}
