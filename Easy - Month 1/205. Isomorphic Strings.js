/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true


Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    // Save letters and check the occurences or indexes?
    // Split it into an array and use a for loop to check each index as occurence and save it into an array do it for t and check if they match
    const sArr = s.split("")
    const tArr = t.split("")
    let sNum = []; let tNum = [];

    for (let i = 0; i < sArr.length; i++) {
        let indexes = s.indexOf(sArr[i])
        let indexesTwo = t.indexOf(tArr[i])
        sNum.push(indexes)
        tNum.push(indexesTwo)
    }

    console.log(sNum, tNum)

    if (JSON.stringify(sNum) === JSON.stringify(tNum)) {
        return true
    };
    return false

};

// The issue with this, is what if the letters are not the same length, I geuss they don't fit the category