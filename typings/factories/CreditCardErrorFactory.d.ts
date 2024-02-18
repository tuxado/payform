import { IEventDispatcher } from "../services";
import { ICreditCardError, ICreditCardErrorOptions } from "../views";

export interface ICreditCardErrorFactory {}

export interface ICreditCardErrorFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    options: ICreditCardErrorOptions
  ): ICreditCardError;
}
