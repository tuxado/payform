import { type InputMaskElement } from "imask";
import { FormEventName, InitializeEventName } from "../constants";

export type TCreditCardFormNumberEventArgs = {
  value: string;
  type: string;
  target: HTMLInputElement | undefined;
};

export type TCreditCardFormNumberMaskOptions = {
  separator?: string;
};

export type TCreditCardFormNumberOptions = {
  selector: string;

  mask?: TCreditCardFormNumberMaskOptions;
  icon?: string;
};

export interface ICreditCardFormNumber {
  initialize(): void;
  mask(): void;
  registerEvents(): void;
  dispatch(payload?: TCreditCardFormNumberEventArgs): void;
  isValid(): boolean;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

// Define the constructor interface
export interface ICreditCardFormNumberConstructor {
  new (
    element: HTMLInputElement,
    options: TCreditCardFormNumberMaskOptions | undefined
  ): ICreditCardFormNumber;
}
