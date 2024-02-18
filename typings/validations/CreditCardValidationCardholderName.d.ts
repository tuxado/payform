export type TCreditCardValidationCardholderNameEventArgs = {
  value: boolean;
  target: HTMLInputElement | undefined;
};



export interface ICreditCardValidationCardholderName {
  initialize(): void;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}