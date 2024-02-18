import {
  ICreditCardFormCardholderName,
  TCreditCardFormCardholderNameOptions,
  IEventDispatcher,
  ICreditCardFormCardholderNameFactory,
  ICreditCardFormCardholderNameFactoryConstructor,
} from "../../typings";
import { name } from "../controls/CardholderName";

export function createName(
  element: JQuery,
  dispatcher: IEventDispatcher,
  options: TCreditCardFormCardholderNameOptions
): ICreditCardFormCardholderName | undefined {
  const elements = element.find(options.selector);

  if (elements.length <= 0) {
    return;
  }

  const input = elements[0] as HTMLInputElement;

  const resource = name(input);

  resource.setDispatcher(dispatcher);

  return resource;
}
