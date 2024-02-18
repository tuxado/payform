import {
  ICreditCardImageNumber,
  IEventDispatcher,
  TCreditCardFormNumberEventArgs,
} from "../../typings";
import { formEventNames } from "../constants/FormEventNames";

export function num(element: HTMLElement): ICreditCardImageNumber {
  let _dispatcher: IEventDispatcher | undefined;

  const initialize = () => {
    dispatcher()?.on(formEventNames.num, handler);
  };

  const handler = (payload: TCreditCardFormNumberEventArgs) => {
    let value = "0123 4567 8910 1112";

    if (payload.target !== undefined) {
      let input = payload.target as HTMLInputElement;

      if (input.value.length > 0) {
        value = input.value;
      }
    }

    if (payload.value !== undefined && payload.value.length > 0) {
      value = payload.value;
    }

    element.innerHTML = value;
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
