import {
  ICreditCardImageSecurityCode,
  IEventDispatcher,
  TCreditCardFormSecurityCodeEventArgs,
} from "../../typings";
import { formEventNames } from "../constants/FormEventNames";

export function cvc(element: HTMLElement): ICreditCardImageSecurityCode {
  let _dispatcher: IEventDispatcher | undefined;

  const initialize = () => {
    dispatcher()?.on(formEventNames.cvc, handler);
  };

  const handler = (payload: TCreditCardFormSecurityCodeEventArgs) => {
    let value = "985";

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
