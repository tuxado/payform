import { IEventDispatcher } from "../services";
import { ICreditCardImageSecurityCode } from "../views";

export interface ICreditCardImageSecurityCodeFactory {}

export interface ICreditCardImageSecurityCodeFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    selector: string
  ): ICreditCardImageSecurityCode | undefined;
}
