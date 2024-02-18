import {
  ICreditCardError,
  ICreditCardErrorNumber,
  ICreditCardErrorExpirationDate,
  ICreditCardErrorSecurityCode,
  ICreditCardErrorCardholderName,
  IEventDispatcher,
} from "../../typings";

export function error(): ICreditCardError {
  let _dispatcher: IEventDispatcher | undefined;

  let _num: ICreditCardErrorNumber | undefined;
  let _expiry: ICreditCardErrorExpirationDate | undefined;
  let _cvc: ICreditCardErrorSecurityCode | undefined;
  let _name: ICreditCardErrorCardholderName | undefined;

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

  const num = (): ICreditCardErrorNumber | undefined => {
    return _num;
  };

  const setNum = (value: ICreditCardErrorNumber) => {
    _num = value;
  };

  const cvc = (): ICreditCardErrorSecurityCode | undefined => {
    return _cvc;
  };

  const setCvc = (value: ICreditCardErrorSecurityCode) => {
    _cvc = value;
  };

  const expiry = (): ICreditCardErrorExpirationDate | undefined => {
    return _expiry;
  };

  const setExpiry = (value: ICreditCardErrorExpirationDate) => {
    _expiry = value;
  };

  const name = (): ICreditCardErrorCardholderName | undefined => {
    return _name;
  };

  const setName = (value: ICreditCardErrorCardholderName) => {
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
