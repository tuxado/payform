import {
  ICreditCardErrorCardholderName,
  ICreditCardErrorOptions,
  IEventDispatcher,
  // TCreditCardErrorInvalidFeedback,
} from "../../typings";
import { name } from "../views/ErrorCardholderName";

export function createName(
  // element: JQuery,
  dispatcher: IEventDispatcher,
  // options: TCreditCardErrorInvalidFeedback
  options: ICreditCardErrorOptions
): ICreditCardErrorCardholderName | undefined {
  // const elements = element.find(options.selector);

  // if (elements.length <= 0) {
  //   return;
  // }

  // const text = elements[0] as HTMLInputElement;
  // const text = elements;

  // const resource = num(text);
  const resource = name(options);
  resource.setDispatcher(dispatcher);

  return resource;
}
