import {
  ICreditCardFormSecurityCode,
  ICreditCardFormSecurityCodeFactory,
  ICreditCardFormSecurityCodeFactoryConstructor,
  IEventDispatcher,
  TCreditCardFormSecurityCodeOptions,
} from "../../typings";
import { cvc } from "../controls/SecurityCode";

export function createCvc(
  element: JQuery,
  dispatcher: IEventDispatcher,
  options: TCreditCardFormSecurityCodeOptions
): ICreditCardFormSecurityCode | undefined {
  const elements = element.find(options.selector);

  if (elements.length <= 0) {
    return;
  }

  const input = elements[0] as HTMLInputElement;

  const resource = cvc(input);
  resource.setDispatcher(dispatcher);

  return resource;
}
