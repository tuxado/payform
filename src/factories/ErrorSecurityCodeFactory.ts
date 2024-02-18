import {
  ICreditCardErrorSecurityCode,
  ICreditCardErrorOptions,
  IEventDispatcher,
  // TCreditCardErrorInvalidFeedback,
} from "../../typings";
import { cvc } from "../views/ErrorSecurityCode";

export function createCvc(
  // element: JQuery,
  dispatcher: IEventDispatcher,
  // options: TCreditCardErrorInvalidFeedback
  options: ICreditCardErrorOptions
): ICreditCardErrorSecurityCode | undefined {
  // const elements = element.find(options.selector);

  // if (elements.length <= 0) {
  //   return;
  // }

  // const text = elements[0] as HTMLInputElement;
  // const text = elements;

  // const resource = num(text);
  const resource = cvc(options);
  resource.setDispatcher(dispatcher);

  return resource;
}
