export function formattedNumber(number) {
    if (number < 1000) {
        return number;
    }

    return `${Math.ceil(number / 100) / 10}k`;
}