import {
  ICreditCardErrorCardholderName,
  ICreditCardErrorOptions,
  IEventDispatcher,
  TCreditCardValidationCardholderNameEventArgs,
} from "../../typings";
import { validationEventNames } from "../constants/ValidationEventNames";
import { find } from "../utilities/ErrorSubjectElement";

export function name(
  options: ICreditCardErrorOptions
): ICreditCardErrorCardholderName {
  let element: Element | undefined;
  let _dispatcher: IEventDispatcher | undefined;

  const initialize = (): void => {
    dispatcher()?.on(validationEventNames.name, handler);
  };

  const handler = (payload: TCreditCardValidationCardholderNameEventArgs) => {
    if (payload.target !== undefined) {
      if (element === undefined) {
        element = find(payload.target, options.subject);
      }

      if (payload.value === true) {
        element?.classList.remove(options.isInvalid);
      } else {
        if (element?.classList.contains(options.isInvalid) === false) {
          element?.classList.add(options.isInvalid);
        }
      }
    }
    // element.val(payload.value);
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
