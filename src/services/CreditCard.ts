import {
  ICreditCard,
  ICreditCardConstructor,
  ICreditCardError,
  ICreditCardForm,
  ICreditCardImage,
  ICreditCardOptions,
  ICreditCardValidation,
  IEventDispatcher,
} from "../../typings";

export const CreditCard: ICreditCardConstructor = class CreditCard
  implements ICreditCard
{
  _dispatcher: IEventDispatcher | undefined;

  _form: ICreditCardForm | undefined;
  _image: ICreditCardImage | undefined;
  _validation: ICreditCardValidation | undefined;
  _error: ICreditCardError | undefined;

  constructor(private element: JQuery, private options: ICreditCardOptions) {}

  initialize(): void {
    if (this._image !== undefined) {
      this._image.initialize();
    }
    if (this._validation !== undefined) {
      this._validation.initialize();
    }
    if (this._error !== undefined) {
      this._error.initialize();
    }

    if (this._form !== undefined) {
      this._form.initialize();
    }
  }

  isValid(): boolean {
    if (this._form !== undefined) {
      return this._form.isValid();
    }
    return false;
  }

  setForm(value: ICreditCardForm): void {
    this._form = value;
  }

  setImage(value: ICreditCardImage): void {
    this._image = value;
  }

  setValidation(value: ICreditCardValidation): void {
    this._validation = value;
  }

  setError(value: ICreditCardError): void {
    this._error = value;
  }

  setDispatcher(value: IEventDispatcher): void {
    this._dispatcher = value;
  }

  dispatcher(): IEventDispatcher | undefined {
    return this._dispatcher;
  }
};
