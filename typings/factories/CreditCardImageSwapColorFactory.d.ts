import { IEventDispatcher } from "../services";
import { ICreditCardImageSwapColor } from "../views";

export interface ICreditCardImageSwapColorFactory {}

export interface ICreditCardImageSwapColorFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    selector: string
  ): ICreditCardImageSwapColor | undefined;
}
