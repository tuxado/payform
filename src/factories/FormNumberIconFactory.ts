import {
  ICreditCardFormNumberIcon,
  ICreditCardFormNumberIconFactory,
  ICreditCardFormNumberIconFactoryConstructor,
  IEventDispatcher,
} from "../../typings";
import { numIcon } from "../views/FormNumberIcon";

export function createNumIcon(
  element: JQuery,
  dispatcher: IEventDispatcher,
  selector: string
): ICreditCardFormNumberIcon | undefined {
  const elements = element.find(selector);

  if (elements.length <= 0) {
    return;
  }

  const input = elements[0] as HTMLInputElement;

  const resource = numIcon(input);
  resource.setDispatcher(dispatcher);

  return resource;
}
