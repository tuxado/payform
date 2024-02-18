import IMask, { InputMaskElement, type InputMask } from "imask";
import {
  ICreditCardFormSecurityCode,
  ICreditCardFormSecurityCodeConstructor,
  IEventDispatcher,
  TCreditCardFormNumberEventArgs,
  TCreditCardFormSecurityCodeEventArgs,
  TCreditCardType,
} from "../../typings";
import { lengths } from "../constants/FormSecurityCodeLengths";
import { types } from "../constants/Types";
import { formEventNames } from "../constants/FormEventNames";
import { imageEventNames } from "../constants/ImageEventNames";
import { validate } from "../utilities/SecurityCodeValidation";

export function cvc(element: HTMLInputElement): ICreditCardFormSecurityCode {
  let inputMask: InputMask<any> | undefined;
  let _dispatcher: IEventDispatcher | undefined;
  let _type: string = types.unk;

  const mask = (): void => {
    if (element !== undefined) {
      inputMask = IMask(element, {
        mask: "r",
        lazy: true,
        blocks: {
          r: {
            repeat: [3, 4],
            mask: "0",
          },
        },
      });
    }
  };

  const dispatch = (payload?: TCreditCardFormSecurityCodeEventArgs) => {
    if (payload === undefined) {
      payload = {} as TCreditCardFormSecurityCodeEventArgs;
    }

    if (payload.target === undefined) {
      payload.target = element;
    }

    if (payload.value === undefined) {
      payload.value = element.value;
    }

    if (payload.type === undefined) {
      payload.type = _type;
    }

    if (inputMask !== undefined && inputMask.value !== undefined) {
      payload.value = inputMask.value;
    }

    dispatcher()?.dispatch(formEventNames.cvc, payload);
  };

  const registerEvents = () => {
    if (element !== undefined) {
      element.addEventListener("focus", () => {
        dispatcher()?.dispatch(imageEventNames.flipped, true);
      });
    }

    if (inputMask !== undefined) {
      dispatcher()?.on(formEventNames.num, handler);

      inputMask.on("accept", (e) => {
        dispatch();
      });
    }
  };

  const initialize = (): void => {
    dispatch();
  };

  const handler = (payload: TCreditCardFormNumberEventArgs) => {
    if (inputMask !== undefined) {
      _type = payload.type;

      const key = (Object.keys(types) as TCreditCardType[]).find(
        (key) => types[key] === _type
      );

      if (key !== undefined) {
        const length = lengths[key];

        inputMask.updateOptions({
          blocks: {
            r: {
              repeat: length.length === 1 ? length[0] : length,
              mask: "0",
            },
          },
        });
      }
    }
  };

  const isValid = (): boolean => {
    return element !== undefined && validate(element.value, _type);
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
