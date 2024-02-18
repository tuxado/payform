import {
  ICreditCardImageSecurityCode,
  ICreditCardImageSecurityCodeFactory,
  ICreditCardImageSecurityCodeFactoryConstructor,
  IEventDispatcher,
} from "../../typings";
import { cvc } from "../views/ImageSecurityCode";

export function createCvc(
  element: JQuery,
  dispatcher: IEventDispatcher,
  selector: string
): ICreditCardImageSecurityCode | undefined {
  const elements = element.find(selector);

  if (elements.length <= 0) {
    return;
  }

  const text = elements[0] as HTMLInputElement;

  const resource = cvc(text);
  resource.setDispatcher(dispatcher);

  return resource;
}
