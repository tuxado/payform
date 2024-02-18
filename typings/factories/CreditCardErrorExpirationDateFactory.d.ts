import { IEventDispatcher } from "../services";
import { ICreditCardErrorExpirationDate, TCreditCardErrorInvalidFeedback } from "../views";

export interface ICreditCardErrorExpirationDateFactory {}

export interface ICreditCardErrorExpirationDateFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    options: TCreditCardErrorInvalidFeedback
  ): ICreditCardErrorExpirationDate | undefined;
}
