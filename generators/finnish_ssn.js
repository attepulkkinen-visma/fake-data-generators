function generateFinnishSSN() {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const pad = (num, size) => {
        let s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    };

    const today = new Date();
    const minYear = today.getFullYear() - 118; // 118 years ago
    const maxYear = today.getFullYear() - 18;  // 18 years ago

    const date = new Date(getRandomInt(minYear, maxYear), getRandomInt(0, 11), getRandomInt(1, 28));
    const day = pad(date.getDate(), 2);
    const month = pad(date.getMonth() + 1, 2);
    const year = date.getFullYear();
    const century = year < 2000 ? '-' : 'A';
    const shortYear = year % 100;

    const individualNumber = pad(getRandomInt(2, 899), 3);
    const ssnWithoutChecksum = `${day}${month}${shortYear}${century}${individualNumber}`;

    const checksumChars = "0123456789ABCDEFHJKLMNPRSTUVWXY";
    const checksumIndex = parseInt(ssnWithoutChecksum.replace('-', '').replace('A', ''), 10) % 31;
    const checksum = checksumChars[checksumIndex];

    return `${ssnWithoutChecksum}${checksum}`;
}

return generateFinnishSSN();
