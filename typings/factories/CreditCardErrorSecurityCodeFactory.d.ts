import { IEventDispatcher } from "../services";
import { ICreditCardErrorSecurityCode, TCreditCardErrorInvalidFeedback } from "../views";

export interface ICreditCardErrorSecurityCodeFactory {}

export interface ICreditCardErrorSecurityCodeFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    options: TCreditCardErrorInvalidFeedback
  ): ICreditCardErrorSecurityCode | undefined;
}
