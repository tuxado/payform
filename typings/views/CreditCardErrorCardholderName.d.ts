export interface ICreditCardErrorCardholderName {
  initialize(): void;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

