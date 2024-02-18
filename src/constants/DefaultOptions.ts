import { ICreditCardOptions } from "../../typings";
import { defaultErrorOptions } from "./DefaultErrorOptions";
import { defaultFormOptions } from "./DefaultFormOptions";
import { defaultImageOptions } from "./DefaultImageOptions";

export const defaultOptions: ICreditCardOptions = {
  form: defaultFormOptions,
  error: defaultErrorOptions,
  image: defaultImageOptions,
};
