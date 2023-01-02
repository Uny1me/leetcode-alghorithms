/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.



Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]


Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6 */

/*
    LOGIC:
    0. The function takes in an array of numbers we call "oldArr"
    1. we return an array that is increasingly a sum of a number from summedArr and a number from oldArr but with an index higher i.e +1
    2. Solution: We get the number of items in the array and we use that with a step down in a for loop so as long as that number is not exceeded we run the function
    3. We will be using the new array such that:
        i.  First we log the first value from the old Array into the new one ✓
        ii. Then we get a variable, "oldArray index, which we initialise at 0(we can use the for loop constraint)  ✓"
        iii. then we use oldArray[i + 1] + newArray[i]  ✓
        iv. we push the answer into the newArray  ✓

*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var summedArr = [];
    summedArr.push(nums[0])
    for(let oldArrIndex = 0; oldArrIndex <  nums.length - 1; oldArrIndex++) {
        const newAddedValue = nums[oldArrIndex + 1] + summedArr[oldArrIndex];
        summedArr.push(newAddedValue)

    }
    return summedArr

};

/*
    LOGIC from LEETCODE
    1. Create new array (that is the length of the prev array)
    2. Save first value from old array into new array
    3. For loop: we start at index 1 and then resulting code will be -1 instead


*/