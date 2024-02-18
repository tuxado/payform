import { IEventDispatcher } from "../services";
import { ICreditCardFormCardholderName, TCreditCardFormCardholderNameOptions } from "../controls";

export interface ICreditCardFormCardholderNameFactory {}

export interface ICreditCardFormCardholderNameFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    options: TCreditCardFormCardholderNameOptions
  ): ICreditCardFormCardholderName | undefined;
}
