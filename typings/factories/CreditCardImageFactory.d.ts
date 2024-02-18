import { IEventDispatcher } from "../services";
import { ICreditCardImage, ICreditCardImageOptions } from "../views";

export interface ICreditCardImageFactory {}

export interface ICreditCardImageFactoryConstructor {
  create(
    element: JQuery,
    dispatcher: IEventDispatcher,
    options: ICreditCardImageOptions
  ): ICreditCardImage;
}
