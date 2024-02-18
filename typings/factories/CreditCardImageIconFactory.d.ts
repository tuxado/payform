import { IEventDispatcher } from "../services";
import { ICreditCardImageIcon } from "../views";

export interface ICreditCardImageIconFactory {}

export interface ICreditCardImageIconFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    selector: string
  ): ICreditCardImageIcon | undefined;
}
