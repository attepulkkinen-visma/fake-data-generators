function generateFinnishTaxNumber() {
    const firstDigit = Math.floor(Math.random() * 2) + 1; // 1 or 2
    let taxNumber = firstDigit.toString();

    for (let i = 0; i < 11; i++) {
        taxNumber += Math.floor(Math.random() * 10).toString();
    }

    return taxNumber;
}

return generateFinnishTaxNumber();
