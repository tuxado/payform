import { IEventDispatcher } from "../services";
import { ICreditCardImageExpirationDate } from "../views";

export interface ICreditCardImageExpirationDateFactory {}

export interface ICreditCardImageExpirationDateFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    selector: string
  ): ICreditCardImageExpirationDate | undefined;
}
