import {
  ICreditCardImageIcon,
  IEventDispatcher,
  TCreditCardFormNumberEventArgs,
} from "../../typings";
import { types } from "../constants/Types";
import { icons } from "../constants/Icons";
import { wrap } from "../utilities/SvgIconWrapper";
import { formEventNames } from "../constants/FormEventNames";

export function icon(element: HTMLElement): ICreditCardImageIcon {
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

    if (payload.type !== types.unk && key !== undefined && key in icons) {
      const icon = icons[key as keyof typeof icons];

      const classList = ["cc-icon-info", "cc-" + payload.type + "-icon-info"];

      if (payload.type === types.ds) {
        classList.push("gradient");
      }

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
