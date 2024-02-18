import {
  ICreditCardFormCardholderName,
  ICreditCardFormCardholderNameConstructor,
  IEventDispatcher,
  TCreditCardFormCardholderNameEventArgs,
} from "../../typings";
import { formEventNames } from "../constants/FormEventNames";
import { imageEventNames } from "../constants/ImageEventNames";
import { validate } from "../utilities/CardholderNameValidation";

export function name(element: HTMLInputElement): ICreditCardFormCardholderName {
  let _dispatcher: IEventDispatcher | undefined;

  const registerEvents = (): void => {
    if (element !== undefined) {
      element.addEventListener("input", (event) => {
        const input = event.target as HTMLInputElement;

        dispatch({
          value: input.value,
          target: input,
        } as TCreditCardFormCardholderNameEventArgs);
      });

      element.addEventListener("focus", () => {
        dispatcher()?.dispatch(imageEventNames.flipped, false);
      });
    }
  };

  const initialize = (): void => {
    dispatch();
  };

  const isValid = (): boolean => {
    return element !== undefined && validate(element.value);
  };

  const setDispatcher = (dispatcher: IEventDispatcher): void => {
    _dispatcher = dispatcher;
  };

  const dispatcher = (): IEventDispatcher | undefined => {
    return _dispatcher;
  };

  const dispatch = (payload?: TCreditCardFormCardholderNameEventArgs) => {
    if (payload === undefined) {
      payload = {} as TCreditCardFormCardholderNameEventArgs;
    }

    if (payload.target === undefined) {
      payload.target = element;
    }

    if (payload.value === undefined) {
      payload.value = element.value;
    }

    dispatcher()?.dispatch(formEventNames.name, payload);
  };

  // registerEvents();

  return {
    registerEvents,
    initialize,
    isValid,
    setDispatcher,
    dispatcher,
  };
}
