import {
  ICreditCardImageSwapColor,
  IEventDispatcher,
  TCreditCardFormNumberEventArgs,
  TCreditCardType,
} from "../../typings";
import { types } from "../constants/Types";
import { colors } from "../constants/Colors";
import { formEventNames } from "../constants/FormEventNames";

export function swapColor (
  element: JQuery
): ICreditCardImageSwapColor {
  let _dispatcher: IEventDispatcher | undefined;

  const initialize = () => {
    dispatcher()?.on(formEventNames.num, handler);
  };

  const handler = (payload: TCreditCardFormNumberEventArgs) => {
    const key = (Object.keys(types) as TCreditCardType[]).find(
      (key) => types[key] === payload.type
    );

    if (key !== undefined) {
      const basecolor = colors[key];

      element.find(".lightcolor").each(function (index, element) {
        element.setAttribute("class", "");
        element.setAttribute("class", "lightcolor " + basecolor);
      });
      element.find(".darkcolor").each(function (index, element) {
        element.setAttribute("class", "");
        element.setAttribute("class", "darkcolor " + basecolor + "dark");
      });
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
};