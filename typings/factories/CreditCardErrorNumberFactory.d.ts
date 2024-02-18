import { IEventDispatcher } from "../services";
import { ICreditCardErrorNumber, TCreditCardErrorInvalidFeedback } from "../views";

export interface ICreditCardErrorNumberFactory {}

export interface ICreditCardErrorNumberFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    options: TCreditCardErrorInvalidFeedback
  ): ICreditCardErrorNumber | undefined;
}
