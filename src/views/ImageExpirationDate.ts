import {
  ICreditCardImageExpirationDate,
  IEventDispatcher,
  TCreditCardFormExpirationDateEventArgs,
} from "../../typings";
import { formEventNames } from "../constants/FormEventNames";

export function expiry(element: HTMLElement): ICreditCardImageExpirationDate {
  let _dispatcher: IEventDispatcher | undefined;

  const initialize = () => {
    dispatcher()?.on(formEventNames.expiry, handler);
  };

  const handler = (payload: TCreditCardFormExpirationDateEventArgs) => {
    let value = "01/99";

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
