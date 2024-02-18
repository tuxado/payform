import {
  ICreditCardErrorNumber,
  ICreditCardErrorOptions,
  IEventDispatcher,
  // TCreditCardErrorInvalidFeedback,
} from "../../typings";
import { num } from "../views/ErrorNumber";

export function createNum(
  // element: JQuery,
  dispatcher: IEventDispatcher,
  // options: TCreditCardErrorInvalidFeedback
  options: ICreditCardErrorOptions
): ICreditCardErrorNumber | undefined {
  // const elements = element.find(options.selector);

  // if (elements.length <= 0) {
  //   return;
  // }

  // const text = elements[0] as HTMLInputElement;
  // const text = elements;

  // const resource = num(text);
  const resource = num(options);
  resource.setDispatcher(dispatcher);

  return resource;
}
