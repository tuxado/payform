import {
  ICreditCardValidationCardholderName,
  IEventDispatcher,
  // TCreditCardValidationInvalidFeedback,
} from "../../typings";
import { name } from "../validations/ValidationCardholderName";

export function createName(
  dispatcher: IEventDispatcher
): ICreditCardValidationCardholderName | undefined {
  // const elements = element.find(options.selector);

  // if (elements.length <= 0) {
  //   return;
  // }

  // const text = elements[0] as HTMLInputElement;
  // const text = elements;

  // const resource = num(text);
  const resource = name();
  resource.setDispatcher(dispatcher);

  return resource;
}
