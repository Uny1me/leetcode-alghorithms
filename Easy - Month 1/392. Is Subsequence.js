/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false


Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.


Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109,
and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
*/

// ## SOLUTION ##

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    // Solved in 40mins 12 Jan
    // Split S into an array and use for loop
    const sArray = s.split("");

    // Save Different values received for initial conditions and use that to determine if we proceed or not.
    const valueArr = []

    // Array of index values of positioning of elements of s in t
    const subsequenceArr = []

    for (let i = 0; i < sArray.length; i++) {
        let sLetter = sArray[i]
        // First we check that all of s exists in t
        if (!t.includes(sLetter)) {
            subsequenceArr.push(t.indexOf(sLetter))
            valueArr.push(false)
        }
        //  Then we check the relative indexes
        else {
            valueArr.push(true)
        }
        // console.log(valueArr)
    }

    if (valueArr.includes(false)) {
        return false
    }
    let value = true;
    for (let i = 1; i < subsequenceArr.length; i++) {
        if ((subsequenceArr[i] > subsequenceArr[i - 1])) {
            value = true;
        }
        else {
            value = false;
        }
    }
    return value;
};