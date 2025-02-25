function generateYTunnus() {
    // Generate the first seven digits
    let digits = Array.from({length: 7}, () => Math.floor(Math.random() * 10)).join('');

    // Calculate the check digit
    let sum = 0;
    for (let i = 0; i < 7; i++) {
        sum += parseInt(digits[i]) * [7, 9, 10, 5, 8, 4, 2][i];
    }
    let remainder = sum % 11;
    let checkDigit = remainder === 0 ? 0 : remainder === 1 ? -1 : 11 - remainder;

    // If the check digit is -1, regenerate the y-tunnus
    if (checkDigit === -1) {
        return generateYTunnus();
    }

    return `${digits}-${checkDigit}`;
}

return generateYTunnus();
