import {
  ICreditCardValidationNumber,
  IEventDispatcher,
  // TCreditCardValidationInvalidFeedback,
} from "../../typings";
import { num } from "../validations/ValidationNumber";

export function createNum(
  dispatcher: IEventDispatcher
): ICreditCardValidationNumber | undefined {
  // const elements = element.find(options.selector);

  // if (elements.length <= 0) {
  //   return;
  // }

  // const text = elements[0] as HTMLInputElement;
  // const text = elements;

  // const resource = num(text);
  const resource = num();
  resource.setDispatcher(dispatcher);

  return resource;
}
