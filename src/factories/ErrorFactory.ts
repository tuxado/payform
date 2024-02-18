import {
  ICreditCardErrorFactory,
  ICreditCardErrorFactoryConstructor,
  ICreditCardError,
  ICreditCardErrorOptions,
  IEventDispatcher,
} from "../../typings";
import { error } from "../views/Error";
import { createName } from "./ErrorCardholderNameFactory";
import { createExpiry } from "./ErrorExpirationDateFactory";
import { createNum } from "./ErrorNumberFactory";
import { createCvc } from "./ErrorSecurityCodeFactory";

export function createError(
  dispatcher: IEventDispatcher,
  options: ICreditCardErrorOptions
): ICreditCardError {
  const resource = error();

  resource.setDispatcher(dispatcher);

  // if (options.num !== undefined) {

  // element = resolve(field, target)

  // const creditCardErrorNumber = createNum(element, dispatcher, options.selector);
  const num = createNum(dispatcher, options);

  if (num !== undefined) {
    resource.setNum(num);
  }

  const expiry = createExpiry(dispatcher, options);

  if (expiry !== undefined) {
    resource.setExpiry(expiry);
  }

  const cvc = createCvc(dispatcher, options);

  if (cvc !== undefined) {
    resource.setCvc(cvc);
  }

  const name = createName(dispatcher, options);

  if (name !== undefined) {
    resource.setName(name);
  }

  // }

  return resource;
}
