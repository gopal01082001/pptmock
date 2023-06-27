
// Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// a. 1 <= nums.length <= 10^4
// b. -2^31 <= nums[i] <= 2^31 - 1

// To move all zeros to the end of the array while preserving the relative order of non-zero elements, you can use a two-pointer approach. Here's a step-by-step algorithm to solve the problem in-place:

// Initialize two pointers, "slow" and "fast," both starting at the beginning of the array (index 0).

// Iterate through the array with the "fast" pointer. For each element at the "fast" pointer:

// If the element is non-zero, swap it with the element at the "slow" pointer and increment both "slow" and "fast" pointers.
// If the element is zero, only increment the "fast" pointer.
// Repeat step 2 until the "fast" pointer reaches the end of the array.

// After the iteration, all non-zero elements would have been moved to the left side of the array, and the "slow" pointer would be pointing to the index where the first zero should be placed.

// Finally, iterate from the "slow" pointer to the end of the array and set all remaining elements to zero.

// Here's the implementation of the above algorithm in javascript:
function moveZeroes(nums) {
  let slow = 0;

  // Move non-zero elements to the left
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }

  // Set remaining elements to zero
  while (slow < nums.length) {
    nums[slow] = 0;
    slow++;
  }

  return nums;
}
let nums1 = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums1));  // Output: [1, 3, 12, 0, 0]

let nums2 = [0];
console.log(moveZeroes(nums2));  // Output: [0]