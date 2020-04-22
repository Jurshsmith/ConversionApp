import {ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from "class-validator";
import { normalizeString } from "../utils";

@ValidatorConstraint({ name: "customText", async: false })
export class TypeConstraint implements ValidatorConstraintInterface {

    validate(text: string, args: ValidationArguments) {
        if (text){
            return args.constraints.includes(normalizeString(text).toLowerCase()); // for async validations you must return a Promise<boolean> here
        }
        return false;
    }

    defaultMessage(args: ValidationArguments) { // here you can provide default error message if validation failed
        return `Text '${args.value}' is not a valid type. It is has to be either of these : ${args.constraints.join(' , ')}`;
    }

}