import { ICreditCard, ICreditCardOptions } from "../services";

export interface ICreditCardFactory {}

export interface ICreditCardFactoryConstructor {
  create(element: JQuery, options: ICreditCardOptions): ICreditCard;
}
