import {
  ICreditCardFormNumber,
  ICreditCardFormNumberFactory,
  ICreditCardFormNumberFactoryConstructor,
  IEventDispatcher,
  TCreditCardFormNumberOptions,
} from "../../typings";
import { num } from "../controls/Number";

export function createNum(
  element: JQuery,
  dispatcher: IEventDispatcher,
  options: TCreditCardFormNumberOptions
): ICreditCardFormNumber | undefined {
  const elements = element.find(options.selector);

  if (elements.length <= 0) {
    return;
  }

  const input = elements[0] as HTMLInputElement;

  const resource = num(input, options.mask);
  resource.setDispatcher(dispatcher);

  return resource;
}
