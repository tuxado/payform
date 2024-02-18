import {
  ICreditCardErrorExpirationDate,
  ICreditCardErrorOptions,
  IEventDispatcher,
  // TCreditCardErrorInvalidFeedback,
} from "../../typings";
import { expiry } from "../views/ErrorExpirationDate";

export function createExpiry(
  // element: JQuery,
  dispatcher: IEventDispatcher,
  // options: TCreditCardErrorInvalidFeedback
  options: ICreditCardErrorOptions
): ICreditCardErrorExpirationDate | undefined {
  // const elements = element.find(options.selector);

  // if (elements.length <= 0) {
  //   return;
  // }

  // const text = elements[0] as HTMLInputElement;
  // const text = elements;

  // const resource = num(text);
  const resource = expiry(options);
  resource.setDispatcher(dispatcher);

  return resource;
}
