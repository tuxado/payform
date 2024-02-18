import { IEventDispatcher } from "../services";
import { ICreditCardImageContainer } from "../views";

export interface ICreditCardImageContainerFactory {}

export interface ICreditCardImageContainerFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    selector: string
  ): ICreditCardImageContainer | undefined;
}
