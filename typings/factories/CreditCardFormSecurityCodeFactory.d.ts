import { IEventDispatcher } from "../services";
import { ICreditCardFormSecurityCode, TCreditCardFormSecurityCodeOptions } from "../controls";

export interface ICreditCardFormSecurityCodeFactory {}

export interface ICreditCardFormSecurityCodeFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    options: TCreditCardFormSecurityCodeOptions
  ): ICreditCardFormSecurityCode | undefined;
}
