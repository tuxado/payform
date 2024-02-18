import {
  ICreditCardValidationExpirationDate,
  IEventDispatcher,
  // TCreditCardValidationInvalidFeedback,
} from "../../typings";
import { expiry } from "../validations/ValidationExpirationDate";

export function createExpiry(
  dispatcher: IEventDispatcher
): ICreditCardValidationExpirationDate | undefined {
  // const elements = element.find(options.selector);

  // if (elements.length <= 0) {
  //   return;
  // }

  // const text = elements[0] as HTMLInputElement;
  // const text = elements;

  // const resource = num(text);
  const resource = expiry();
  resource.setDispatcher(dispatcher);

  return resource;
}
