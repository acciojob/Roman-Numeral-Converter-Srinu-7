function convertToRoman(num) {
    const romanNumerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let roman = '';

    romanNumerals.forEach(([symbol, value]) => {
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    });

    return roman;
}

document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const number = parseInt(document.getElementById('number').value, 10);
    const resultElement = document.getElementById('result');

    if (isNaN(number) || number < 0 || number > 100000) {
        resultElement.textContent = 'Please enter a valid number between 0 and 100000.';
    } else {
        const romanNumeral = convertToRoman(number);
        resultElement.textContent = `The Roman numeral is: ${romanNumeral}`;
    }
});
