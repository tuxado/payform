import { IEventDispatcher } from "../services";
import { ICreditCardForm, ICreditCardFormOptions } from "../controls";

export interface ICreditCardFormFactory {}

export interface ICreditCardFormFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    options: ICreditCardFormOptions
  ): ICreditCardForm;
}
