import {
  ICreditCardImageCardholderName,
  IEventDispatcher,
  TCreditCardFormCardholderNameEventArgs,
} from "../../typings";
import { formEventNames } from "../constants/FormEventNames";

export function name (
  element: JQuery
): ICreditCardImageCardholderName {
  let _dispatcher: IEventDispatcher | undefined;

  const initialize = () => {
    dispatcher()?.on(formEventNames.name, handler);
  };

  const handler = (payload: TCreditCardFormCardholderNameEventArgs) => {
    let value = "John Doe";

    let input = payload.target as HTMLInputElement;

    if (input.value.length > 0) {
      value = input.value;
    }

    element.text(value);
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