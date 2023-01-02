/*
724. Find Pivot Index

Given an array of integers nums, calculate the pivot index of this array.
The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
Return the leftmost pivot index. If no such index exists, return -1.



Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0

Hint (1/3)
Create an array sumLeft where sumLeft[i] is the sum of all the numbers to the left of index  i
Hint (2/3)
Create an array sumRight where sumRight[i] is the sum of all the numbers to the right of index i.
Hint (3/3)
For each index i, check if sumLeft[i] equals sumRight[i] return i. If no i found, return -1.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // Initialize total sum of the given array...
    let totalSum = 0
    // Traverse the elements and add them to store the totalSum...
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
    }
    // Initialize 'leftsum' as sum of first i numbers, not including nums[i]...
    let leftSum = 0
    // Again traverse all the elements through the for loop and store the sum of i numbers from left to right...
    for (let i = 0; i < nums.length; i++) {
        // sum to the left == leftsum.
        // sum to the right === totalSum - leftsum - nums[i]..
        // check if leftsum == totalSum - leftsum - nums[i]...
        if (leftSum * 2 == totalSum - nums[i])
            return i;       // Return the pivot index...
        leftSum += nums[i]
    }
    return -1      // If there is no index that satisfies the conditions in the problem statement...
};