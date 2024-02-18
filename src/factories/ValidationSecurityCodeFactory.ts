import {
  ICreditCardValidationSecurityCode,
  IEventDispatcher,
  // TCreditCardValidationInvalidFeedback,
} from "../../typings";
import { cvc } from "../validations/ValidationSecurityCode";

export function createCvc(
  dispatcher: IEventDispatcher
): ICreditCardValidationSecurityCode | undefined {
  // const elements = element.find(options.selector);

  // if (elements.length <= 0) {
  //   return;
  // }

  // const text = elements[0] as HTMLInputElement;
  // const text = elements;

  // const resource = num(text);
  const resource = cvc();
  resource.setDispatcher(dispatcher);

  return resource;
}
