import { IEventDispatcher } from "../services";
import { ICreditCardErrorCardholderName, TCreditCardErrorInvalidFeedback } from "../views";

export interface ICreditCardErrorCardholderNameFactory {}

export interface ICreditCardErrorCardholderNameFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    options: TCreditCardErrorInvalidFeedback
  ): ICreditCardErrorCardholderName | undefined;
}
