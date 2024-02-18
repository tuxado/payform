import {
  ICreditCardValidationNumber,
  IEventDispatcher,
  TCreditCardFormNumberEventArgs,
  TCreditCardValidationNumberEventArgs,
} from "../../typings";
import { formEventNames } from "../constants/FormEventNames";
import { validationEventNames } from "../constants/ValidationEventNames";
import { validate } from "../utilities/NumberValidation";

export function num(): ICreditCardValidationNumber {
  // export function num(element: JQuery): ICreditCardValidationNumber {
  let _dispatcher: IEventDispatcher | undefined;

  const initialize = (): void => {
    dispatcher()?.on(formEventNames.num, handler);
  };

  const handler = (payload: TCreditCardFormNumberEventArgs) => {
    const isValid = validate(payload.value, payload.type);

    dispatcher()?.dispatch(validationEventNames.num, {
      target: payload.target,
      value: isValid,
    } as TCreditCardValidationNumberEventArgs);
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
