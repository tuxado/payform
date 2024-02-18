import { IEventDispatcher } from "../services";
import { ICreditCardFormNumber, TCreditCardFormNumberOptions } from "../controls";

export interface ICreditCardFormNumberFactory {}

export interface ICreditCardFormNumberFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    options: TCreditCardFormNumberOptions
  ): ICreditCardFormNumber | undefined;
}
