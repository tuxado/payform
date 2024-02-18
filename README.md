A general purpose library for building credit card forms, validating inputs, and formatting numbers.

How to use

```
    <script src="jquery.min.js"></script>
    <script src="imask.js"></script>
    <script src="payform.plugin.js"></script>
    <script>
      $(document).ready(function () {
        $(".payform").creditCard({
          form: {
            num: {
              selector: '[role="cc-num-field"]',
              mask: { separator: " " },
              icon: '[role="cc-num-field-icon"]',
            },
            name: {
              selector: '[role="cc-name-field"]',
            },
            expiry: {
              selector: '[role="cc-expiary-field"]',
            },
            cvc: { selector: '[role="cc-cvc-field"]' },
          },
          image: {
            card: '[role="cc-img-wrapper"]',
            informations: {
              num: '[role="cc-num-info"]',

              name: '[role="cc-name-info"]',
              expiry: '[role="cc-expiry-info"]',
              cvc: '[role="cc-cvc-info"]',
            },
          },
          error: {
            isInvalid: "is-invalid",

            subject: undefined,
          },
        });
      });
    </script>
```

![1](https://github.com/tuxado/payform/assets/7065151/19526fdc-2b86-4745-8cc8-00b265a03d66)

![2](https://github.com/tuxado/payform/assets/7065151/14fe9cf5-2ae6-4884-bcdb-d8e7a9c711c0)

