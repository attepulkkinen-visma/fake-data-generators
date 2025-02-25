function generateFinnishIBAN() {
    const countryCode = 'FI';
    const bankCode = Math.floor(100000 + Math.random() * 900000).toString();
    const accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    const bban = bankCode + accountNumber;
    const checksum = 98 - mod97(bban + countryCode + '00');
    const iban = countryCode + (checksum < 10 ? '0' : '') + checksum + bban;
    return iban;
}

function mod97(string) {
    let checksum = string.slice(0, 2);
    for (let offset = 2; offset < string.length; offset += 7) {
        const fragment = checksum + string.substring(offset, offset + 7);
        checksum = parseInt(fragment, 10) % 97;
    }
    return checksum;
}

return generateFinnishIBAN();
