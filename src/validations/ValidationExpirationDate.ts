import {
  ICreditCardValidationExpirationDate,
  IEventDispatcher,
  TCreditCardFormExpirationDateEventArgs,
  TCreditCardValidationExpirationDateEventArgs,
} from "../../typings";
import { formEventNames } from "../constants/FormEventNames";
import { validationEventNames } from "../constants/ValidationEventNames";
import { validate } from "../utilities/ExpirationDateValidation";

export function expiry(): ICreditCardValidationExpirationDate {

  let _dispatcher: IEventDispatcher | undefined;

  const initialize = (): void => {
    dispatcher()?.on(formEventNames.expiry, handler);
  };

  const handler = (payload: TCreditCardFormExpirationDateEventArgs) => {

    const isValid = validate(payload.value);

    dispatcher()?.dispatch(validationEventNames.expiry, {
      target: payload.target,
      value: isValid,
    } as TCreditCardValidationExpirationDateEventArgs);
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
