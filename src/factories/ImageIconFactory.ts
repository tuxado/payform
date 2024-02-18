import {
  ICreditCardImageIcon,
  ICreditCardImageIconFactory,
  ICreditCardImageIconFactoryConstructor,
  IEventDispatcher,
} from "../../typings";
import { icon } from "../views/ImageIcon";

export function createIcon(
  element: JQuery,
  dispatcher: IEventDispatcher,
  selector: string
): ICreditCardImageIcon | undefined {
  const elements = element.find(selector);

  if (elements.length <= 0) {
    return;
  }

  const input = elements[0] as HTMLInputElement;

  const resource = icon(input);
  resource.setDispatcher(dispatcher);

  return resource;
}
