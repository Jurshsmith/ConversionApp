import {ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from "class-validator";

@ValidatorConstraint({ name: "customText", async: false })
export class EmptyConstraint implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments) {
        if (text){
            return text.length > 0;
        }
        return false;
    }

    defaultMessage(args: ValidationArguments) { // here you can provide default error message if validation failed
        return `'${args.property}' is expected to be provided`;
    }

}