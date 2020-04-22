import { IConvert } from '../interfaces/conversion.interfaces';

export const correctPayload : IConvert = {
    input: '100',
    from: 'celsius',
    to: 'fahrenheit',
    response: '212'
}

export const incorrectPayload : IConvert = {
    input: '100',
    from: 'celsius',
    to: 'fahrenheit',
    response: '214'
}

export const invalidPayload : IConvert = {
    input: '100',
    from: 'celsius',
    to: 'liters',
    response: '214'
}

export const emptyPayload: IConvert = {
    input: null,
    from: null,
    to: null,
    response: null
}