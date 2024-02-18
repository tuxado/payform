import {
  ICreditCardImageContainer,
  ICreditCardImageContainerFactory,
  ICreditCardImageContainerFactoryConstructor,
  IEventDispatcher,
} from "../../typings";
import { container } from "../views/ImageContainer";

export function createContainer(
  element: JQuery,
  dispatcher: IEventDispatcher,
  selector: string
): ICreditCardImageContainer | undefined {
  const elements = element.find(selector);

  if (elements.length <= 0) {
    return;
  }

  const resource = container(elements);
  resource.setDispatcher(dispatcher);

  return resource;
}
