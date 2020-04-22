export interface IUnit {
    unit: string,
    symbol: string
}

export interface IConvert {
    input: string;

    from: string

    to: string

    response: string;
}
