/**
 * 9. Palindrome Number
 *
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 *
 *  Example 1:
 *
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 *
 * Example 2:
 *
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 * Example 3:
 *
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 *
 *
 * Constraints:
 *
 *     -231 <= x <= 231 - 1
 *
 *
 * Follow up: Could you solve it without converting the integer to a string?
 */

// /**
//  * Palindrome is a number that reads the same from left to right
//  *
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function (x) {
//
//     let string = x.toString();
//     let start = 0;
//     let end = string.length - 1;
//     while (start <= end) {
//         if (string[start] !== string[end]) {
//             return false;
//         } else {
//             start++;
//             end--;
//         }
//     }
//     return true;
// };

/**
 * Palindrome is a number that reads the same from left to right
 *
 * Do not convert int to string
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    // We want to reverse the number by finding the remainder by % 10
    // 121
    // 100 / 100 = 1
    // 20 / 10 = 2
    // 1 / 1 = 1
    // reconstruct in reverse

    let reverse = 0;
    let copy = x;

    // keep looping until we fully reverse the original number
    while (copy > 0) {
        const digit = copy % 10;
        reverse = reverse * 10 + digit;
        copy = Math.floor(copy / 10);
    }

    return x === reverse;
};

// var isPalindrome = function(x) {
//     var reverse = 0;
//     var copy = x;
//
//     //The loop break when the copy of original number becomes zero
//     //Also negative number cannot be a palindrome
//     while (copy > 0) {
//         const digit = copy % 10;
//         reverse = reverse * 10 + digit;
//         copy = ~~(copy / 10);
//     }
//
//     return reverse == x;
// };

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false