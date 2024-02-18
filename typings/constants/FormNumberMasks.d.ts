import { TCreditCardType } from "../services/CreditCard";

export type TCreditCardFormNumberMasks = Record<TCreditCardType, string | readonly string[]>;
