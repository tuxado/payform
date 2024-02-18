import IMask, {
  ChunksTailDetails,
  ChunksTailState,
  InputMask,
  MaskedPattern,
  MaskedPatternOptions,
} from "imask";
// import { DIRECTION } from "imask/esm/index";

import { formNumberInputMask } from "../constants/FormNumberInputMask";
import {
  ICreditCardFormNumber,
  IEventDispatcher,
  TCreditCardFormNumberEventArgs,
  TCreditCardFormNumberMaskOptions,
} from "../../typings";
import { replace } from "../utilities/FormNumberMaskSeparator";
import { types } from "../constants/Types";
import { formEventNames } from "../constants/FormEventNames";
import { imageEventNames } from "../constants/ImageEventNames";
import { validate } from "../utilities/NumberValidation";

export function num(
  element: HTMLInputElement,
  options?: TCreditCardFormNumberMaskOptions | undefined
): ICreditCardFormNumber {
  let inputMask: InputMask<any> | undefined;
  let _dispatcher: IEventDispatcher | undefined;

  const mask = (): void => {
    if (element !== undefined) {
      const maskedMask = formNumberInputMask.map((value) => {
        if (typeof value === "object" && "mask" in value) {
          if (value.mask !== undefined && options?.separator !== undefined) {
            value.mask = replace(value.mask, options.separator);
          }
        }
        return value;
      });

      const _options = {
        mask: maskedMask,

        dispatch: function (
          appended: string,
          dynamicMasked: any,
          flags: any,
          tail: any
        ) {
          if (!dynamicMasked.compiledMasks.length) return;

          const inputValue = dynamicMasked.rawInputValue;

          const number = (inputValue + tail?.toString()).replace(/\D/g, "");

          for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
            let re = new RegExp(dynamicMasked.compiledMasks[i].pattern);

            if (number.match(re) != null) {
              const inputs = dynamicMasked.compiledMasks[i].compiledMasks.map(
                (m: any, index: number) => {
                  const isCurrent = dynamicMasked.currentMask === m;
                  const startInputPos = isCurrent
                    ? m.displayValue.length
                    : m.nearestInputPos(
                        m.displayValue.length,
                        "FORCE_LEFT"
                        // DIRECTION.FORCE_LEFT
                      );

                  if (m.rawInputValue !== inputValue) {
                    m.reset();
                    m.append(inputValue, { raw: true });
                  } else if (!isCurrent) {
                    m.remove(startInputPos);
                  }
                  m.append(appended, dynamicMasked.currentMaskFlags(flags));
                  m.appendTail(tail);

                  return {
                    index,
                    weight: m.rawInputValue.length,
                    totalInputPositions: m.totalInputPositions(
                      0,
                      Math.max(
                        startInputPos,
                        m.nearestInputPos(
                          m.displayValue.length,
                          "FORCE_LEFT"
                          // DIRECTION.FORCE_LEFT
                        )
                      )
                    ),
                  };
                }
              );

              inputs.sort(
                (i1: any, i2: any) =>
                  i2.weight - i1.weight ||
                  i2.totalInputPositions - i1.totalInputPositions
              );

              const maskedPatternn = new MaskedPattern({
                mask: dynamicMasked.compiledMasks[i].compiledMasks[
                  inputs[0].index
                ].mask,
                cardtype: dynamicMasked.compiledMasks[i].cardtype,
                cvcLength: dynamicMasked.compiledMasks[i].cvcLength,
                luhn: dynamicMasked.compiledMasks[i].luhn,
              } as MaskedPatternOptions);
              maskedPatternn.append(
                appended,
                dynamicMasked.currentMaskFlags(flags)
              );
              maskedPatternn.appendTail(tail);

              return maskedPatternn;
            }
          }
        },
      };

      inputMask = IMask(element, _options);
    }
  };

  const registerEvents = () => {
    if (element !== undefined) {
      element.addEventListener("focus", () => {
        dispatcher()?.dispatch(imageEventNames.flipped, false);
      });
    }

    if (inputMask !== undefined) {
      inputMask.on("accept", (event) => {
        dispatch();
      });
    }
  };

  const initialize = (): void => {
    if (element && element.value) {
      dispatch();
    }
    // dispatch(initializeEventNames.num);
  };

  const setDispatcher = (dispatcher: IEventDispatcher): void => {
    _dispatcher = dispatcher;
  };

  const dispatcher = (): IEventDispatcher | undefined => {
    return _dispatcher;
  };

  const dispatch = (payload?: TCreditCardFormNumberEventArgs) => {
    if (payload === undefined) {
      payload = {} as TCreditCardFormNumberEventArgs;
    }

    if (payload.target === undefined) {
      payload.target = element;
    }

    if (payload.type === undefined) {
      payload.type = types.unk;
    }

    if (payload.value === undefined) {
      payload.value = element.value;
    }

    if (inputMask !== undefined) {
      if (inputMask.value !== undefined) {
        payload.value = inputMask.value;
      }
      if (
        inputMask.masked !== undefined &&
        inputMask.masked.currentMask !== undefined &&
        inputMask.masked.currentMask.cardtype !== undefined
      ) {
        payload.type = inputMask.masked.currentMask.cardtype;
      }
    }

    dispatcher()?.dispatch(formEventNames.num, payload);
  };

  const isValid = (): boolean => {
    return inputMask !== undefined && validate(inputMask.value, inputMask.masked.currentMask.cardtype);
  };

  // mask();
  // registerEvents();

  return {
    mask,
    registerEvents,
    initialize,
    setDispatcher,
    dispatcher,
    dispatch,
    isValid,
  };
}
