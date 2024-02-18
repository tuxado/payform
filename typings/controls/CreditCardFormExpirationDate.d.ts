export type TCreditCardFormExpirationDateEventArgs = {
  value: string;
  target : HTMLInputElement;
};
export type TCreditCardFormExpirationDateOptions = {
  selector: string;
};

export interface ICreditCardFormExpirationDate {
  initialize(): void;
  mask(): void;
  registerEvents(): void;
  isValid(): boolean;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

// Define the constructor interface
export interface ICreditCardFormExpirationDateConstructor {
  new (element: HTMLInputElement): ICreditCardFormExpirationDate;
}
