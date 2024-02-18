import { IEventDispatcher } from "../services";
import { ICreditCardFormExpirationDate, TCreditCardFormExpirationDateOptions } from "../controls";

export interface ICreditCardFormExpirationDateFactory {}

export interface ICreditCardFormExpirationDateFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    options: TCreditCardFormExpirationDateOptions
  ): ICreditCardFormExpirationDate | undefined;
}
