import { IConvert } from '../interfaces/convert.interface';


export const validPayloads: IConvert[] = [
    {
        input: 100,
        from: 'celsius',
        to: 'fahrenheit',
        response: 212
    },
    {
        input: 100,
        from: 'celsius',
        to: 'fahrenheit',
        response: 214
    },
    {
        input: 100,
        from: 'cubic-feets',
        to: 'liters',
        response: 2000
    },
    {
        input: 100,
        from: 'celsiUS',
        to: 'KELVin',
        response: 373.2
    }, {
        input: 100,
        from: 'celsiUS     ',
        to: '      KELVin       ',
        response: 373.2
    },
    {
        input: 100,
        from: 'celsiUS     ',
        to: '      KELVin       ',
        response: 373.2
    },{
        input: 3,
        from: 'tableSpoonS ',
        to: 'cubic-feets',
        response: 0.02
    },
    {
        input: 3,
        from: 'tableSpoonS ',
        to: 'cubic-feets',
        response: 0.023
    },
   {
        input: 0,
        from: 'celsius',
        to: 'kelvin',
        response: 273.15
    },
    {
        input: 0,
        from: 'celsius',
        to: 'kelvin',
        response: 273.2
    }
    
];

export const invalids : IConvert[] = [
    {
        input: null,
        from: 'celsius',
        to: 'liters',
        response: 214
    },
    {
        input: 32,
        from: null,
        to: 'liters',
        response: 214
    },{
        input: 100,
        from: 'celsius',
        to: '',
        response: 214
    },{
        input: 100,
        from: 'dayo',
        to: '',
        response: 214
    },{
        input: 100,
        from: 'dayo',
        to: '',
        response: null
    },{
        input: null,
        from: null,
        to: null,
        response: null
    }
];


export const invalidPayloads : IConvert[] = [
    {
        input: 100,
        from: 'celsius',
        to: 'liters',
        response: 214
    },{
        input: 100,
        from: 'liters',
        to: 'kelvin',
        response: 214
    },
    {
        input: null,
        from: 'celsius',
        to: 'liters',
        response: 214
    },
    {
        input: 32,
        from: null,
        to: 'liters',
        response: 214
    },{
        input: 100,
        from: 'celsius',
        to: '',
        response: 214
    },{
        input: 100,
        from: 'dayo',
        to: '',
        response: 214
    },{
        input: 100,
        from: 'dayo',
        to: '',
        response: null
    },{
        input: null,
        from: null,
        to: null,
        response: null
    },
    {
        input: 500,
        from: 'tableSpoonS ',
        to: 'cubic-feets',
        response: 0.24
    },
    {
        input: 500,
        from: 'tableSpoonS ',
        to: 'cubic-feets',
        response: 0.2
    },
    {
        input: 500,
        from: 'tableSpoonS ',
        to: 'cubic-feets',
        response: 0.35
    }, {
        input: 500,
        from: 'tableSpoonS ',
        to: 'cubic-feets',
        response: 0.34
    },
    {
        input: 500,
        from: 'tableSpoonS ',
        to: 'cubic-feets',
        response: 0.25
    }
];