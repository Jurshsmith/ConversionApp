
import { Validate } from 'class-validator';
import { TypeConstraint } from '../../v1/constraints/type.const';
import { ALL_UNIT_TYPES } from '../../v1/constants';
import { EmptyConstraint } from '../constraints/isEmpty.const';
import { RegexConstraint } from '../constraints/regex.const';
import { standardInput } from '../patterns/index';

export interface IUnit {
    unit: string,
    symbol: string
}

export class IConvert {

    @Validate(EmptyConstraint)
    @Validate(RegexConstraint, [standardInput])
    input: number;

    @Validate(EmptyConstraint)
    @Validate(TypeConstraint, ALL_UNIT_TYPES)
    from: string

    @Validate(EmptyConstraint)
    @Validate(TypeConstraint, ALL_UNIT_TYPES)
    to: string

    @Validate(EmptyConstraint)
    @Validate(RegexConstraint, [standardInput])
    response: number;

}
