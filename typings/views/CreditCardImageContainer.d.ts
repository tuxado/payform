
export interface ICreditCardImageContainer {
  initialize(): void;
  registerEvents(): void;
  setDispatcher(value: IEventDispatcher): void;
  dispatcher(): IEventDispatcher | undefined;
}

// Define the constructor interface
export interface ICreditCardImageContainerConstructor {
  new (
    element: JQuery
  ): ICreditCardImageContainer;
}
