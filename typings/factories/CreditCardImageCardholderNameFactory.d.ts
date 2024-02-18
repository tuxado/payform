import { IEventDispatcher } from "../services";
import { ICreditCardImageCardholderName } from "../views";

export interface ICreditCardImageCardholderNameFactory {}

export interface ICreditCardImageCardholderNameFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    selector: string
  ): ICreditCardImageCardholderName | undefined;
}
