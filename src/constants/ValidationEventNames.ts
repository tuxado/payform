import { ValidationEventName, TValidationEventName } from "../../typings";

export const validationEventNames: TValidationEventName = {
    num: ValidationEventName.num,
    expiry: ValidationEventName.expiry,
    cvc: ValidationEventName.cvc,
    name: ValidationEventName.name,
} as const;
