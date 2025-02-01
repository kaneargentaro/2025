/**
 * 20. Valid Parentheses
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *     Open brackets must be closed by the same type of brackets.
 *     Open brackets must be closed in the correct order.
 *     Every close bracket has a corresponding open bracket of the same type.
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 *
 * Example 3:
 * Input: s = "(]"
 * Output: false
 *
 * Example 4:
 * Input: s = "([])"
 * Output: true
 *
 * Constraints:
 *
 *     1 <= s.length <= 104
 *     s consists of parentheses only '()[]{}'.
 */
/**
 *  Compare leftmost char to rightmost char - only valid if they're matching
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//
//     if (s.length === 1) return false;
//     // it is not possible for uneven numbers to match
//     if (s.length % 2 !== 0) return false;
//
//     const matchingParentheses = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };
//
//     let left = 0;
//     let right = s.length - 1;
//
//
//     while (left <= right) {
//         // compare left and left+1 to see if they're a match
//         // otherwise, compare left + right
//         const expectedClosingParentheses = matchingParentheses[s[left]];
//
//         // Check whether the next two characters are matching parentheses
//         if (s[left + 1] === expectedClosingParentheses) {
//             left += 2;
//
//             // // left value cannot exceed or be equal to the right
//             // if (left >= right) {
//             //     return false;
//             // }
//         }
//         // Compare the leftmost value to the rightmost value to see if they're matching
//         else if (s[right] === expectedClosingParentheses) {
//             left++;
//             right--;
//         }
//         // No match
//         else {
//             return false;
//         }
//     }
//     return true;
// };

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // it is not possible for uneven numbers to match
    if (s.length % 2 !== 0) return false;

    const matchingParentheses = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    const stack = [];

    for (let i = 0; i < s.length; i++) {

        // Open paranth matches, so add it to the stack
        if (Object.values(matchingParentheses).includes(s[i])) {
            stack.push(s[i]);
        }
        // If the key (close) matches this val
        else if (matchingParentheses.hasOwnProperty(s[i])) {
            // there has to be something in the stack (open) to compare against
            // the matching open val has to match the latest entry in the stack
            if (!stack.length || matchingParentheses[s[i]] !== stack.pop()) {
                return false;
            }
        }
    }

    // Stack should be empty after processing
    return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("([)")); // false
console.log(isValid("[])")); // false
console.log(isValid("()")); // true
console.log(isValid("(([]){})")); // true