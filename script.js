function convertToRoman(num) {
    const obj = {
        0: ['M', 1000], 
        1: ['D', 500], 
        2: ['C', 100], 
        3: ['L', 50], 
        4: ['X', 10], 
        5: ['V', 5], 
        6: ['I', 1]
    };

    let roman = '';

    for (let i = 0; i <= 6; i++) {
        while (num >= obj[i][1]) {
            roman += obj[i][0];
            num -= obj[i][1];
        }
        
        // Handle subtractive combinations:
        if (i === 2 && num >= 900) { // 900 -> CM
            roman += 'CM';
            num -= 900;
        } else if (i === 2 && num >= 400) { // 400 -> CD
            roman += 'CD';
            num -= 400;
        } else if (i === 4 && num >= 90) { // 90 -> XC
            roman += 'XC';
            num -= 90;
        } else if (i === 4 && num >= 40) { // 40 -> XL
            roman += 'XL';
            num -= 40;
        } else if (i === 6 && num >= 9) { // 9 -> IX
            roman += 'IX';
            num -= 9;
        } else if (i === 6 && num >= 4) { // 4 -> IV
            roman += 'IV';
            num -= 4;
        }
    }

    return roman;
}

// You can test your code by running the above function and printing it to the console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36)); // Expected output: XXXVI

// do not edit below this line
module.exports = convertToRoman;
