import {
  ICreditCardFormExpirationDate,
  ICreditCardFormExpirationDateFactory,
  ICreditCardFormExpirationDateFactoryConstructor,
  IEventDispatcher,
  TCreditCardFormExpirationDateOptions,
} from "../../typings";
import { expiry } from "../controls/ExpirationDate";

export function createExpiry(
  element: JQuery,
  dispatcher: IEventDispatcher,
  options: TCreditCardFormExpirationDateOptions
): ICreditCardFormExpirationDate | undefined {
  const elements = element.find(options.selector);

  if (elements.length <= 0) {
    return;
  }

  const input = elements[0] as HTMLInputElement;

  const resource = expiry(input);
  resource.setDispatcher(dispatcher);

  return resource;
}
