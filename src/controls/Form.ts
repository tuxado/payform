import {
  ICreditCardFormCardholderName,
  ICreditCardFormExpirationDate,
  ICreditCardFormOptions,
  ICreditCardFormNumber,
  ICreditCardFormSecurityCode,
  ICreditCardForm,
  IEventDispatcher,
  ICreditCardFormNumberIcon,
} from "../../typings";

export function form(
  element: JQuery,
  options: ICreditCardFormOptions
): ICreditCardForm {
  let _dispatcher: IEventDispatcher | undefined;
  let _num: ICreditCardFormNumber | undefined;
  let _numIcon: ICreditCardFormNumberIcon | undefined;
  let _expiry: ICreditCardFormExpirationDate | undefined;
  let _cvc: ICreditCardFormSecurityCode | undefined;
  let _name: ICreditCardFormCardholderName | undefined;

  function initialize() {
    if (_cvc !== undefined) {
      _cvc.mask();
      _cvc.registerEvents();
      _cvc.initialize();
    }

    if (_expiry !== undefined) {
      _expiry.mask();
      _expiry.registerEvents();
      _expiry.initialize();
    }

    if (_name !== undefined) {
      _name.registerEvents();
      _name.initialize();
    }

    if (_num !== undefined) {
      _num.mask();
      _num.registerEvents();

      if (_numIcon !== undefined) {
        _numIcon.initialize();
      }

      _num.initialize();
    }
  }

  function num(): ICreditCardFormNumber | undefined {
    return _num;
  }

  function expiry(): ICreditCardFormExpirationDate | undefined {
    return _expiry;
  }

  function cvc(): ICreditCardFormSecurityCode | undefined {
    return _cvc;
  }

  function name(): ICreditCardFormCardholderName | undefined {
    return _name;
  }

  function setNum(value: ICreditCardFormNumber) {
    _num = value;
  }

  function setExpiry(value: ICreditCardFormExpirationDate) {
    _expiry = value;
  }

  function setCvc(value: ICreditCardFormSecurityCode) {
    _cvc = value;
  }

  function setName(value: ICreditCardFormCardholderName) {
    _name = value;
  }

  function setNumIcon(value: ICreditCardFormNumberIcon) {
    _numIcon = value;
  }

  function isValid(): boolean {
    let isValid = true;

    if (_name !== undefined) {
      isValid = isValid && _name.isValid();
    }

    if (_expiry !== undefined) {
      isValid = isValid && _expiry.isValid();
    }

    if (_num !== undefined) {
      isValid = isValid && _num.isValid();
    }

    if (_cvc !== undefined) {
      isValid = isValid && _cvc.isValid();
    }

    return isValid;
  }

  function setDispatcher(value: IEventDispatcher): void {
    _dispatcher = value;
  }

  function dispatcher(): IEventDispatcher | undefined {
    return _dispatcher;
  }

  return {
    initialize,
    num,
    expiry,
    cvc,
    name,
    setNum,
    setExpiry,
    setCvc,
    setName,
    setNumIcon,
    isValid,
    setDispatcher,
    dispatcher,
  };
}
