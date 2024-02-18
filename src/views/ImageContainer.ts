import { ICreditCardImageContainer, IEventDispatcher } from "../../typings";
import { imageEventNames } from "../constants/ImageEventNames";

export function container(element: JQuery): ICreditCardImageContainer {
  let _dispatcher: IEventDispatcher | undefined;
  let frontSideElement: JQuery | undefined;
  let backSideElement: JQuery | undefined;

  const initialize = () => {
    if (element.length > 0) {
      element.on("click", (event: JQuery.ClickEvent) => {
        if (event.currentTarget.classList.contains("flipped")) {
          dispatcher()?.dispatch(imageEventNames.flipped, false);
        } else {
          dispatcher()?.dispatch(imageEventNames.flipped, true);
        }
      });

      frontSideElement = element.find("#cc-svg-f");
      backSideElement = element.find("#cc-svg-b");

      frontSideElement.on("load", () => {
        updateContainerHeight();
      });

      setTimeout(() => {
        updateContainerHeight();
      }, 0);
      
      $(window).on(
        "resize",
        debounce(() => {
          updateContainerHeight();
        }, 0)
      );
    }
  };

  const handler = (flipped: boolean) => {
    if (flipped === false) {
      element.removeClass("flipped");
    } else {
      element.addClass("flipped");
    }
  };

  const updateContainerHeight = () => {
    const visibleSide = getVisibleSide();
    if (visibleSide) {
      const height = visibleSide.outerHeight();
      element.css({
        height: height + "px",
      });
    }
  };

  const getVisibleSide = () => {
    // Check if the container is rotated to the front face
    if (element.hasClass("flipped")) {
      return backSideElement;
    } else {
      return frontSideElement;
    }
  };

  const debounce = (func: Function, delay: number | undefined) => {
    let timeout: number | undefined;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(func, delay);
    };
  };

  const registerEvents = () => {
    dispatcher()?.on(imageEventNames.flipped, handler);
  };

  const setDispatcher = (value: IEventDispatcher): void => {
    _dispatcher = value;
  };

  const dispatcher = (): IEventDispatcher | undefined => {
    return _dispatcher;
  };

  return {
    initialize,
    registerEvents,
    setDispatcher,
    dispatcher,
  };
}
