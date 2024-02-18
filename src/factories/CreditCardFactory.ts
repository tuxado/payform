import { ICreditCard, ICreditCardOptions } from "../../typings";
import { CreditCard } from "../services/CreditCard";
import { createError } from "./ErrorFactory";
import { createForm } from "./FormFactory";
import { createImage } from "./ImageFactory";
import { createEventDispatcher } from "./EventDispatcherFactory";
import { createValidation } from "./ValidationFactory";

export function createCreditCard(
  element: JQuery,
  options: ICreditCardOptions
): ICreditCard {
  const resource = new CreditCard(element, options);

  const dispatcher = createEventDispatcher();
  resource.setDispatcher(dispatcher);

  if (options.image !== undefined && options.image !== false) {
    const image = createImage(element, dispatcher, options.image);
    image.setDispatcher(dispatcher);
    resource.setImage(image);
  }

  if (options.error !== undefined && options.error !== false) {
    const validation = createValidation(dispatcher);
    validation.setDispatcher(dispatcher);
    resource.setValidation(validation);

    const error = createError(dispatcher, options.error);
    error.setDispatcher(dispatcher);
    resource.setError(error);
  }

  const form = createForm(element, dispatcher, options.form);
  resource.setForm(form);

  return resource;
}
