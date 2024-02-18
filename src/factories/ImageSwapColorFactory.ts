import {
  ICreditCardImageSwapColor,
  ICreditCardImageSwapColorFactory,
  ICreditCardImageSwapColorFactoryConstructor,
  IEventDispatcher,
} from "../../typings";
import { swapColor } from "../views/ImageSwapColor";

export function createSwapColor(
  element: JQuery,
  dispatcher: IEventDispatcher,
  selector: string
): ICreditCardImageSwapColor | undefined {
  const elements = element.find(selector);

  if (elements.length <= 0) {
    return;
  }

  const resource = swapColor(elements);
  resource.setDispatcher(dispatcher);

  return resource;
}
