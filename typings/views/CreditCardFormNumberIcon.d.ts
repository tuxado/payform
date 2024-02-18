import { TCreditCardFormNumberEventArgs } from "../controls";

export interface ICreditCardFormNumberIcon {
  initialize(): void;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

// Define the constructor interface
export interface ICreditCardFormNumberIconConstructor {
  new (private element: InputMaskElement): ICreditCardFormNumberIcon;
}
