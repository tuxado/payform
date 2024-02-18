import { IEventDispatcher } from "../services";
import { ICreditCardFormNumberIcon } from "../views";

export interface ICreditCardFormNumberIconFactory {}

export interface ICreditCardFormNumberIconFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    selector: string
  ): ICreditCardFormNumberIcon | undefined;
}
