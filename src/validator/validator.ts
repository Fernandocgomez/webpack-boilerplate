import { Validations } from './../validations/validation.model';
export class Validator {
    constructor() {}

    maxLength(number: number, value: string): string {
        if(value.length > number) {
            value = value.slice(0, number)
            return value;
        } else {
            return value;
        }
    }

    format(regEx: RegExp, value: string): boolean {
        return regEx.test(value);
    }

    isValid(validations: Validations, inputVal: string): boolean {
        if(this.maxLength(validations.maxLength, inputVal) && inputVal.length <= validations.maxLength) {
            return true;
        } else {
            return false;
        }
    }


    
}