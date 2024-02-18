import {
  ICreditCardValidation,
  ICreditCardValidationNumber,
  ICreditCardValidationExpirationDate,
  ICreditCardValidationSecurityCode,
  ICreditCardValidationCardholderName,
  IEventDispatcher,
} from "../../typings";

export function validation(): ICreditCardValidation {
  let _dispatcher: IEventDispatcher | undefined;

  let _num: ICreditCardValidationNumber | undefined;
  let _expiry: ICreditCardValidationExpirationDate | undefined;
  let _cvc: ICreditCardValidationSecurityCode | undefined;
  let _name: ICreditCardValidationCardholderName | undefined;

  const initialize = () => {
    if (_num !== undefined) {
      _num.initialize();
    }
    if (_expiry !== undefined) {
      _expiry.initialize();
    }
    if (_cvc !== undefined) {
      _cvc.initialize();
    }
    if (_name !== undefined) {
      _name.initialize();
    }
  };

  const num = (): ICreditCardValidationNumber | undefined => {
    return _num;
  };

  const setNum = (value: ICreditCardValidationNumber) => {
    _num = value;
  };

  const cvc = (): ICreditCardValidationSecurityCode | undefined => {
    return _cvc;
  };

  const setCvc = (value: ICreditCardValidationSecurityCode) => {
    _cvc = value;
  };

  const expiry = (): ICreditCardValidationExpirationDate | undefined => {
    return _expiry;
  };

  const setExpiry = (value: ICreditCardValidationExpirationDate) => {
    _expiry = value;
  };

  const name = (): ICreditCardValidationCardholderName | undefined => {
    return _name;
  };

  const setName = (value: ICreditCardValidationCardholderName) => {
    _name = value;
  };

  const setDispatcher = (value: IEventDispatcher): void => {
    _dispatcher = value;
  };

  const dispatcher = (): IEventDispatcher | undefined => {
    return _dispatcher;
  };

  return {
    initialize,
    num,
    setNum,
    expiry,
    setExpiry,
    cvc,
    setCvc,
    name,
    setName,
    setDispatcher,
    dispatcher,
  };
}
