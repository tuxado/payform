import {
  ICreditCardImageCardholderName,
  ICreditCardImageCardholderNameFactory,
  ICreditCardImageCardholderNameFactoryConstructor,
  IEventDispatcher,
} from "../../typings";
import { name } from "../views/ImageCardholderName";

export function createName(
  element: JQuery,
  dispatcher: IEventDispatcher,
  selector: string
): ICreditCardImageCardholderName | undefined {
  const elements = element.find(selector);

  if (elements.length <= 0) {
    return;
  }

  const resource = name(elements);
  resource.setDispatcher(dispatcher);

  return resource;
}
