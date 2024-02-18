import {
  FactoryOpts,
  FactoryStaticOpts,
  Masked,
  type MaskedDynamic,
} from "imask";
import { ExtendFactoryArgOptions } from "imask/esm/masked/factory";

type TCreditCardFormNumberInputMaskKeys =
  | "cardname"
  | "regex"
  | "cardtype"
  | "mask";

export type TCreditCardFormNumberInputMask = {
  pattern: string | undefined;
  cardtype: string;
  mask: string | string[];
  expose?: boolean;
};

export type TCreditCardFormNumberInputDynamicMaskType = Array<
  ExtendFactoryArgOptions<TCreditCardFormNumberInputMask>
>;
