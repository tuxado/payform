import {
  ICreditCardImageExpirationDate,
  IEventDispatcher,
} from "../../typings";
import { expiry } from "../views/ImageExpirationDate";

export function createExpiry(
  element: JQuery,
  dispatcher: IEventDispatcher,
  selector: string
): ICreditCardImageExpirationDate | undefined {
  const elements = element.find(selector);

  if (elements.length <= 0) {
    return;
  }

  const text = elements[0] as HTMLInputElement;

  const resource = expiry(text);
  resource.setDispatcher(dispatcher);

  return resource;
}
