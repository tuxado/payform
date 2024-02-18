import {
  ICreditCardValidationSecurityCode,
  IEventDispatcher,
  TCreditCardFormSecurityCodeEventArgs,
  TCreditCardValidationSecurityCodeEventArgs,
} from "../../typings";
import { formEventNames } from "../constants/FormEventNames";
import { validationEventNames } from "../constants/ValidationEventNames";
import { validate } from "../utilities/SecurityCodeValidation";

export function cvc(): ICreditCardValidationSecurityCode {
  // export function cvc(element: JQuery): ICreditCardValidationSecurityCode {
  let _dispatcher: IEventDispatcher | undefined;

  const initialize = (): void => {
    dispatcher()?.on(formEventNames.cvc, handler);
  };

  const handler = (payload: TCreditCardFormSecurityCodeEventArgs) => {


    const isValid = validate(payload.value, payload.type);

    dispatcher()?.dispatch(validationEventNames.cvc, {
      target: payload.target,
      value: isValid,
    } as TCreditCardValidationSecurityCodeEventArgs);
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
