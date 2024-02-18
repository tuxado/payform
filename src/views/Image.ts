import {
  ICreditCardImage,
  ICreditCardImageCardholderName,
  ICreditCardImageContainer,
  ICreditCardImageExpirationDate,
  ICreditCardImageIcon,
  ICreditCardImageNumber,
  ICreditCardImageOptions,
  ICreditCardImageSecurityCode,
  ICreditCardImageSwapColor,
  IEventDispatcher,
} from "../../typings";
import { imageEventNames } from "../constants/ImageEventNames";

export function image(
  element: JQuery,
  options: ICreditCardImageOptions
): ICreditCardImage {
  let _dispatcher: IEventDispatcher | undefined;

  let _num: ICreditCardImageNumber | undefined;
  let _expiry: ICreditCardImageExpirationDate | undefined;
  let _cvc: ICreditCardImageSecurityCode | undefined;
  let _name: ICreditCardImageCardholderName | undefined;
  let _swapColor: ICreditCardImageSwapColor | undefined;
  let _icon: ICreditCardImageIcon | undefined;
  let _container: ICreditCardImageContainer | undefined;

  const initialize = () => {
    if (_num !== undefined) {
      _num.initialize();

      if (_swapColor !== undefined) {
        _swapColor.initialize();
      }
      if (_icon !== undefined) {
        _icon.initialize();
      }
      if (_container !== undefined) {
        _container.registerEvents();
        _container.initialize();
      }
    }

    if (_cvc !== undefined) {
      _cvc.initialize();
    }

    if (_expiry !== undefined) {
      _expiry.initialize();
    }

    if (_name !== undefined) {
      _name.initialize();
    }

    if (options.card !== undefined) {
      loaded();
    }
  };

  // const handler = (flipped: boolean) => {
  //   const elements = element.find(options.card + " .cc-img-container");

  //   if (flipped === false) {
  //     elements.removeClass("flipped");
  //   } else {
  //     elements.addClass("flipped");
  //   }
  // };

  const loaded = () => {
    element.find(".preload").removeClass("preload");
  };

  // const registerEvents = () => {
  //   const elements = element.find(options.card + " .cc-img-container");

  //   if (elements.length > 0) {
  //     elements.on("click", (event) => {
  //       if (event.currentTarget.classList.contains("flipped")) {
  //         dispatcher()?.dispatch(imageEventNames.flipped, false);
  //       } else {
  //         dispatcher()?.dispatch(imageEventNames.flipped, true);
  //       }
  //     });

  //     dispatcher()?.on(imageEventNames.flipped, handler);
  //   }
  // };

  const num = (): ICreditCardImageNumber | undefined => {
    return _num;
  };

  const name = (): ICreditCardImageCardholderName | undefined => {
    return _name;
  };

  const expiry = (): ICreditCardImageExpirationDate | undefined => {
    return _expiry;
  };

  const cvc = (): ICreditCardImageSecurityCode | undefined => {
    return _cvc;
  };

  const setIcon = (creditCardImageIcon: ICreditCardImageIcon) => {
    _icon = creditCardImageIcon;
  };

  const setSwapColor = (value: ICreditCardImageSwapColor) => {
    _swapColor = value;
  };

  const setContainer = (value: ICreditCardImageContainer) => {
    _container = value;
  };

  const setNum = (value: ICreditCardImageNumber) => {
    _num = value;
  };

  const setExpiry = (value: ICreditCardImageExpirationDate) => {
    _expiry = value;
  };

  const setCvc = (value: ICreditCardImageSecurityCode) => {
    _cvc = value;
  };

  const setName = (value: ICreditCardImageCardholderName) => {
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
    // registerEvents,
    num,
    name,
    expiry,
    cvc,
    setIcon,
    setSwapColor,
    setContainer,
    setNum,
    setExpiry,
    setCvc,
    setName,
    setDispatcher,
    dispatcher,
  };
}
