import { IEventDispatcher } from "../services";
import { ICreditCardImageNumber } from "../views";

export interface ICreditCardImageNumberFactory {}

export interface ICreditCardImageNumberFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    selector: string
  ): ICreditCardImageNumber | undefined;
}
