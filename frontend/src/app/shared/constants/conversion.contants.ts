import { IUnit } from '../interfaces/conversion.interfaces';

export const TEMPERATURE_TYPES = [
    "kelvin", "celsius", "fahrenheit", "rankine"
];

export const VOLUME_TYPES = [
    "liters", "tablespoons", "cubic-inches", "cups", "cubic-feets", "gallons"
];

export const TEMPERATURE_MAP: IUnit[] = [
    {
        unit: "kelvin",
        symbol: "K"
    },
    {
        unit: "celsius",
        symbol: "C"
    }, 
    {
        unit: "fahrenheit",
        symbol: "F"
    },
    {
        unit: "rankine",
        symbol: "R"
    }
];


export const VOLUME_MAP: IUnit[] = [
    {
        unit: "liters",
        symbol: "l"
    },
    {
        unit: "tablespoons",
        symbol: "tsp"
    }, 
    {
        unit: "cubic-inches",
        symbol: "in3"
    },
    {
        unit: "cups",
        symbol: "cup"
    },
    {
        unit: "cubic-feets",
        symbol: "ft3"
    },
    {
        unit: "gallons",
        symbol: "gal"
    }
]

export const ALL_UNIT_TYPES = [
    ...TEMPERATURE_TYPES,
    ...VOLUME_TYPES
]

export const ALL_UNITS_MAP : IUnit[] = [
    ...TEMPERATURE_MAP,
    ...VOLUME_MAP
]