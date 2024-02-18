import { FormEventName, TFormEventName } from "../../typings";

export const formEventNames: TFormEventName = {
    num: FormEventName.num,
    expiry: FormEventName.expiry,
    cvc: FormEventName.cvc,
    name: FormEventName.name,
} as const;
