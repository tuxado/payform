import {
  ICreditCardImageNumber,
  ICreditCardImageNumberFactory,
  ICreditCardImageNumberFactoryConstructor,
  IEventDispatcher,
} from "../../typings";
import { num } from "../views/ImageNumber";

export function createNum(
  element: JQuery,
  dispatcher: IEventDispatcher,
  selector: string
): ICreditCardImageNumber | undefined {
  const elements = element.find(selector);

  if (elements.length <= 0) {
    return;
  }

  const text = elements[0] as HTMLInputElement;

  const resource = num(text);
  resource.setDispatcher(dispatcher);

  return resource;
}
