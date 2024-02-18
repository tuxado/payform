import {
  ICreditCardForm,
  ICreditCardFormFactory,
  ICreditCardFormFactoryConstructor,
  ICreditCardFormOptions,
  IEventDispatcher,
} from "../../typings";
import { form } from "../controls/Form";
import { createName } from "./FormCardholderNameFactory";
import { createExpiry } from "./FormExpirationDateFactory";
import { createNum } from "./FormNumberFactory";
import { createNumIcon } from "./FormNumberIconFactory";
import { createCvc } from "./FormSecurityCodeFactory";

export function createForm(
  element: JQuery,
  dispatcher: IEventDispatcher,
  options: ICreditCardFormOptions
): ICreditCardForm {
  const resource = form(element, options);
  resource.setDispatcher(dispatcher);

  if (options.num !== undefined) {
    const creditCardFormNumber = createNum(
      element,
      dispatcher,
      options.num
    );

    if (creditCardFormNumber !== undefined) {
      resource.setNum(creditCardFormNumber);

      if (options.num.icon !== undefined) {
        const creditCardFormNumberIcon = createNumIcon(
          element,
          dispatcher,
          options.num.icon
        );

        if (creditCardFormNumberIcon !== undefined) {
          resource.setNumIcon(creditCardFormNumberIcon);
        }
      }
    }
  }

  if (options.name !== undefined) {
    const creditCardFormCardholderName = createName(
      element,
      dispatcher,
      options.name
    );

    if (creditCardFormCardholderName !== undefined) {
      resource.setName(creditCardFormCardholderName);
    }
  }

  if (options.expiry !== undefined) {
    const creditCardFormExpirationDate = createExpiry(
      element,
      dispatcher,
      options.expiry
    );

    if (creditCardFormExpirationDate !== undefined) {
      resource.setExpiry(creditCardFormExpirationDate);
    }
  }

  if (options.cvc !== undefined) {
    const creditCardFormSecurityCode = createCvc(
      element,
      dispatcher,
      options.cvc
    );

    if (creditCardFormSecurityCode !== undefined) {
      resource.setCvc(creditCardFormSecurityCode);
    }
  }

  return resource;
}
