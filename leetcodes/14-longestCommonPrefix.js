/**
 * 14. Longest Common Prefix
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Constraints:
 *     1 <= strs.length <= 200
 *     0 <= strs[i].length <= 200
 *     strs[i] consists of only lowercase English letters if it is non-empty.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    //sliding window through all of them at the same time to see if they're the same value
    let left = 0;
    const entries = strs.length;
    let prefix = '';
    if (entries === undefined || entries === 0) return prefix;
    if (entries === 1) {
        return strs[0];
    }

    let moreChar = true;

    while (moreChar) {
        let thisChar = null;
        for (let j = 0; j < entries; j++) {
            // No more chars left to process
            let val = strs[j][left];
            if (val === undefined) {
                moreChar = false;
                break;
            }

            // This prefix character isn't assigned yet
            if (thisChar === null) {
                thisChar = val;
            }

            // Matching prefix character, continue to process
            else if (thisChar === val) {
                // Last entry in the array to increment to the next char position
                if (j === entries - 1) {
                    prefix += thisChar;
                    left += 1;
                }
            }

            // It does not match so we need to stop processing
            else {
                moreChar = false;
                break;
            }


        }
    }

    return prefix;

};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix1 = function (strs) {

    // Compare all characters of the first string against subsequent strings in the array
    // so we can stop processing as early as possible
    let prefix = strs[0];
    let prefixLength = prefix.length;

    for (let i = 0; i < strs.length; i++) {
        let thisVal = strs[i];

        // Keep reducing our prefix string by 1 while it does not match the current entry
        while (prefix !== thisVal.substring(0, prefixLength)) {
            prefixLength--;
            if (prefixLength === 0) {
                return '';
            }
            prefix = prefix.substring(0, prefixLength);
        }
    }

    return prefix;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""

console.log(longestCommonPrefix1(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix1(["dog", "racecar", "car"])); // ""