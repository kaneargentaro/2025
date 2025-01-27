/**
 * 1 <= s.length <= 15
 * s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 * It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    // Create a dict for our known roman numeral combinations
    const ROMAN_TO_INTEGER = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }

    let total = 0;
    let left = 0;
    let right = 1;

    // Sliding window to process and match against our dict
    while (left < s.length) {
        // We have a double character eg. IV IX XL XC CD CM
        // Add it and increment after the last character processed
        const doubleCharVal = ROMAN_TO_INTEGER[s[left] + s[right]];
        if (doubleCharVal) {
            total += doubleCharVal;
            left = right + 1;
            right = left + 1;
        }
        // otherwise it's a single char, add it
        else {
            total += ROMAN_TO_INTEGER[s[left]];
            left++;
            right++;
        }
    }

    return total;
};

console.log(romanToInt("III")) // 3
console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("MCMXCIV")) // 1994
