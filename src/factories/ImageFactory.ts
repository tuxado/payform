import {
  ICreditCardImage,
  ICreditCardImageFactory,
  ICreditCardImageFactoryConstructor,
  ICreditCardImageOptions,
  IEventDispatcher,
} from "../../typings";
import { image } from "../views/Image";
import { createName } from "./ImageCardholderNameFactory";
import { createContainer } from "./ImageContainerFactory";
import { createExpiry } from "./ImageExpirationDateFactory";
import { createIcon } from "./ImageIconFactory";
import { createNum } from "./ImageNumberFactory";
import { createCvc } from "./ImageSecurityCodeFactory";
import { createSwapColor } from "./ImageSwapColorFactory";

export function createImage(
  element: JQuery,
  dispatcher: IEventDispatcher,
  options: ICreditCardImageOptions
): ICreditCardImage {
  const resource = image(element, options);
  resource.setDispatcher(dispatcher);

  if (options.card !== undefined) {
    const creditCardImageSwapColor = createSwapColor(
      element,
      dispatcher,
      options.card
    );

    if (creditCardImageSwapColor !== undefined) {
      resource.setSwapColor(creditCardImageSwapColor);
    }

    const creditCardImageIcon = createIcon(
      element,
      dispatcher,
      `${options.card} .cc-icon-info`
    );

    if (creditCardImageIcon !== undefined) {
      resource.setIcon(creditCardImageIcon);
    }

    const creditCardImageContainer = createContainer(
      element,
      dispatcher,
      options.card + " .cc-img-container"
    );

    if (creditCardImageContainer !== undefined) {
      resource.setContainer(creditCardImageContainer);
    }
  }

  if (options.informations !== undefined) {
    if (options.informations.num !== undefined) {
      const creditCardImageNumber = createNum(
        element,
        dispatcher,
        options.informations.num
      );

      if (creditCardImageNumber !== undefined) {
        resource.setNum(creditCardImageNumber);
      }
    }

    if (options.informations.name !== undefined) {
      const creditCardImageCardholderName = createName(
        element,
        dispatcher,
        options.informations.name
      );

      if (creditCardImageCardholderName !== undefined) {
        resource.setName(creditCardImageCardholderName);
      }
    }

    if (options.informations.expiry !== undefined) {
      const creditCardImageExpirationDate = createExpiry(
        element,
        dispatcher,
        options.informations.expiry
      );

      if (creditCardImageExpirationDate !== undefined) {
        resource.setExpiry(creditCardImageExpirationDate);
      }
    }

    if (options.informations.cvc !== undefined) {
      const creditCardImageSecurityCode = createCvc(
        element,
        dispatcher,
        options.informations.cvc
      );

      if (creditCardImageSecurityCode !== undefined) {
        resource.setCvc(creditCardImageSecurityCode);
      }
    }
  }

  return resource;
}
