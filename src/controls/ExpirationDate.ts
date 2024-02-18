import IMask, { InputMaskElement, type InputMask, FactoryArg } from "imask";
import {
  ICreditCardFormExpirationDate,
  ICreditCardFormExpirationDateConstructor,
  IEventDispatcher,
  TCreditCardFormExpirationDateEventArgs,
} from "../../typings";
import { formEventNames } from "../constants/FormEventNames";
import { imageEventNames } from "../constants/ImageEventNames";
import { validate } from "../utilities/ExpirationDateValidation";

export function expiry(
  element: HTMLInputElement
): ICreditCardFormExpirationDate {
  let inputMask: InputMask<any> | undefined;
  let _dispatcher: IEventDispatcher | undefined;

  const mask = (): void => {
    if (element !== undefined) {
      inputMask = IMask(element, {
        mask: Date,
        pattern: "MM{/}YY",
        blocks: {
          MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
            maxLength: 2,
          },
          YY: {
            mask: IMask.MaskedRange,
            from: 0,
            to: 99,
            maxLength: 2,
          },
        },
        autofix: "pad",
        overwrite: true,
        format: (date: Date) => {
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const mm = month < 10 ? `0${month}` : `${month}`;
          const yy = `${year}`.slice(2);
          return `${mm}/${yy}`;
        },
        min: new Date(),
        max: new Date(new Date().setFullYear(new Date().getFullYear() + 50)),
        parse: (expiry: string) => {
          const [month, year] = expiry.split("/");
          if (!month || !year) {
            return null;
          }
          const currentYear = new Date().getFullYear();
          const currentYearFirstTwoDigits = Math.floor(currentYear / 100);
          const fullYear = `${currentYearFirstTwoDigits}${year}`;

          const date = new Date(`${fullYear}-${month}-01`);
          if (isNaN(date.getTime())) {
            return null;
          }
          return date;
        },
      } as FactoryArg);
    }
  };

  const dispatch = (payload?: TCreditCardFormExpirationDateEventArgs) => {
    if (payload === undefined) {
      payload = {} as TCreditCardFormExpirationDateEventArgs;
    }

    if (payload.target === undefined) {
      payload.target = element;
    }

    if (payload.value === undefined) {
      payload.value = element.value;
    }

    if (inputMask !== undefined && inputMask.value !== undefined) {
      payload.value = inputMask.value;
    }

    dispatcher()?.dispatch(formEventNames.expiry, payload);
  };

  const registerEvents = (): void => {
    if (element !== undefined) {
      element.addEventListener("focus", () => {
        dispatcher()?.dispatch(imageEventNames.flipped, false);
      });
    }

    if (inputMask !== undefined) {
      inputMask.on("accept", () => {
        if (inputMask !== undefined) {
          dispatch();
        }
      });
    }
  };

  const initialize = (): void => {
    if (element && element.value) {
      dispatch();
    }
  };

  const isValid = (): boolean => {
    return inputMask !== undefined && validate(inputMask.value);
  };

  const setDispatcher = (dispatcher: IEventDispatcher): void => {
    _dispatcher = dispatcher;
  };

  const dispatcher = (): IEventDispatcher | undefined => {
    return _dispatcher;
  };

  // mask();
  // registerEvents();

  return {
    mask,
    registerEvents,
    initialize,
    isValid,
    setDispatcher,
    dispatcher,
  };
}
