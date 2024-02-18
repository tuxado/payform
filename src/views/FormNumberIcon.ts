import {
  ICreditCardFormNumberIcon,
  IEventDispatcher,
  TCreditCardFormNumberEventArgs,
} from "../../typings";
import { types } from "../constants/Types";
import { icons } from "../constants/Icons";
import { wrap } from "../utilities/SvgIconWrapper";
import { formEventNames } from "../constants/FormEventNames";

export function numIcon(element: HTMLElement): ICreditCardFormNumberIcon {
  let _dispatcher: IEventDispatcher | undefined;

  const initialize = () => {
    dispatcher()?.on(formEventNames.num, handler);
  };

  const handler = (payload: TCreditCardFormNumberEventArgs) => {

    let type = payload.type;

    const key = Object.keys(types).find(
      (key) => types[key as keyof typeof types] === type
    );

    element.innerHTML = "";
    element.classList.remove(...element.classList);

    if (key !== undefined && key in icons) {
      const icon = icons[key as keyof typeof icons];
      const classList = [
        "input-group-text",
        "cc-num-field-icon",
        "cc-" + payload.type + "-num-field-icon",
      ];

      element.classList.add(...classList);
      element.innerHTML = wrap(icon);
    }
  };

  const setDispatcher = (value: IEventDispatcher): void => {
    _dispatcher = value;
  };

  const dispatcher = (): IEventDispatcher | undefined => {
    return _dispatcher;
  };

  return {
    initialize,
    setDispatcher,
    dispatcher,
  };
}
