import {
  ICreditCardValidationCardholderName,
  IEventDispatcher,
  TCreditCardFormCardholderNameEventArgs,
  TCreditCardValidationCardholderNameEventArgs,
} from "../../typings";
import { formEventNames } from "../constants/FormEventNames";
import { validationEventNames } from "../constants/ValidationEventNames";
import { validate } from "../utilities/CardholderNameValidation";

export function name(): ICreditCardValidationCardholderName {
  // export function name(element: JQuery): ICreditCardValidationCardholderName {
  let _dispatcher: IEventDispatcher | undefined;

  const initialize = (): void => {
    dispatcher()?.on(formEventNames.name, handler);
  };

  const handler = (payload: TCreditCardFormCardholderNameEventArgs) => {
    const isValid = validate(payload.value);

    dispatcher()?.dispatch(validationEventNames.name, {
      target: payload.target,
      value: isValid,
    } as TCreditCardValidationCardholderNameEventArgs);
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
