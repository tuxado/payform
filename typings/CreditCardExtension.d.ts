import { ICreditCardOptions } from "./services/CreditCard";

declare global {
  interface IStaticCreditCardExtension {
    (selector?: string, options?: ICreditCardOptions): JQuery<HTMLElement>;
  }
  interface ICreditCardExtension {
    (options?: ICreditCardOptions): JQuery<HTMLElement>;
  }

  interface JQuery {
    creditCard: ICreditCardExtension;
    isValid(): boolean;
  }

  interface JQueryStatic {
    fn: JQuery;
    creditCard: IStaticCreditCardExtension;
    isValid(): boolean;
  }
}
