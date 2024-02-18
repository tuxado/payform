import {
  ICreditCardValidation,
  IEventDispatcher,
} from "../../typings";
import { validation } from "../validations/Validation";
import { createName } from "./ValidationCardholderNameFactory";
import { createExpiry } from "./ValidationExpirationDateFactory";
import { createNum } from "./ValidationNumberFactory";
import { createCvc } from "./ValidationSecurityCodeFactory";

export function createValidation(
  dispatcher: IEventDispatcher
): ICreditCardValidation {
  const resource = validation();

  resource.setDispatcher(dispatcher);

  // if (options.num !== undefined) {

  // element = resolve(field, target)

  // const creditCardValidationNumber = createNum(element, dispatcher, options.selector);
  const num = createNum(dispatcher);

  if (num !== undefined) {
    resource.setNum(num);
  }

  const expiry = createExpiry(dispatcher);

  if (expiry !== undefined) {
    resource.setExpiry(expiry);
  }

  const cvc = createCvc(dispatcher);

  if (cvc !== undefined) {
    resource.setCvc(cvc);
  }

  const name = createName(dispatcher);

  if (name !== undefined) {
    resource.setName(name);
  }

  // }

  return resource;
}
