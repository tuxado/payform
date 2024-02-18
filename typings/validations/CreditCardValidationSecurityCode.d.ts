export type TCreditCardValidationSecurityCodeEventArgs = {
  value: boolean;
  target: HTMLInputElement | undefined;
};

export interface ICreditCardValidationSecurityCode {
  initialize(): void;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}