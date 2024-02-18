export type TCreditCardValidationExpirationDateEventArgs = {
  value: boolean;
  target: HTMLInputElement | undefined;
};



export interface ICreditCardValidationExpirationDate {
  initialize(): void;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}