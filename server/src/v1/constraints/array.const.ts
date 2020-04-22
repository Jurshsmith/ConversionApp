import {ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from "class-validator";

@ValidatorConstraint({ name: "customText", async: false })
export class ArrayNotEmptyConstraint implements ValidatorConstraintInterface {
    validate(arr: Array<string>, args: ValidationArguments) {
        if (arr){
            if (arr.length){
                return arr.length > 0; // for async validations you must return a Promise<boolean> here
            }
        }
        return false;
    }

    defaultMessage(args: ValidationArguments) { // here you can provide default error message if validation failed
        return `${args.property} should not be empty`;
    }

}