import {ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from "class-validator";

@ValidatorConstraint({ name: "customText", async: false })
export class RegexConstraint implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments) {
        if (text){
            return args.constraints[0].test(text); // for async validations you must return a Promise<boolean> here
        } 
        return false;
    }

    defaultMessage(args: ValidationArguments) { 
        // here you can provide default error message if validation failed
        return `'${args.value}' is not valid`;
    }

}