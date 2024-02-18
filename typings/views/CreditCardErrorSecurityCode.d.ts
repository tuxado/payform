export interface ICreditCardErrorSecurityCode {
  initialize(): void;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

