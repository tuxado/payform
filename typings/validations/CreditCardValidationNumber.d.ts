export type TCreditCardValidationNumberEventArgs = {
  value: boolean;
  target: HTMLInputElement | undefined;
};


export interface ICreditCardValidationNumber {
    initialize(): void;
    setDispatcher(value: IEventDispatcher): void;
    dispatcher(): IEventDispatcher | undefined;
  }