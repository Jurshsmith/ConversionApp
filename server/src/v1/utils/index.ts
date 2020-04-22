
export const normalizeString = str => {
    return str.trim().replace(/\s\s+/g,' ');
}

export const normalizeNumber = num => {
    return parseFloat(num);
}

export const OneDecimal = (value, precision = 1) => {
        // incase you want to go to more decimal places, increment the precision val where 1 = tenth and so on
        var multiplier = Math.pow(10, precision || 0);
        return (Math.round(value * multiplier) / multiplier).toFixed(1);
}

export const oneDecimalApproximate = value => {
	return Math.round(value * 10) / 10;
}