/// <reference path="../typings/CreditCardExtension.d.ts" />

import { ICreditCardOptions } from "../typings";
import { defaultOptions } from "./constants/DefaultOptions";
import { createCreditCard } from "./factories/CreditCardFactory";
import { CreditCard } from "./services/CreditCard";

// Define the plugin
$.extend({
  creditCard: function (
    selector?: string,
    options?: ICreditCardOptions
  ) {
    // If no selector is provided, use elements with role="credit-card"
    if (!selector) {
      selector = '[role="credit-card"]';
    }

    $(selector).creditCard(options);
  },
});

const creditCard = function (
  this: JQuery,
  options?: ICreditCardOptions
) {
  let $this = $(this);

  const plugin = $this.data("cc-extension");

  this.isValid = function () {

    if (plugin instanceof CreditCard) {
      return plugin.isValid();
    }

    return false;
  };

  return this.each(function () {
    // Check if plugin has already been initialized
    if ($this.data("cc-extension")) {
      return;
    }

    options = $.extend(true, defaultOptions, options ?? {});


    

    const resource = createCreditCard($this, options);
    
    resource.initialize();

    $this.data("cc-extension", resource);
  });
};

$.fn.creditCard = creditCard;
