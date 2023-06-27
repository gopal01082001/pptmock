// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// a. 1 <= s.length <= 10^5
// b. s consists of only lowercase English letters.
// Create an empty object or Map to store the character frequencies.

// // Iterate through the string and update the character frequencies in the object or Map.

// // Iterate through the string again and find the first character with a frequency of 1. Return its index.

// // If no non-repeating character is found, return -1.

// // Here's the implementation of the above algorithm using an object in JavaScript:
function firstUniqChar(s) {
    // Step 1: Create an object to store character frequencies
    const charFreq = {};
  
    // Step 2: Update character frequencies
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charFreq[char] = (charFreq[char] || 0) + 1;
    }
  
    // Step 3: Find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charFreq[char] === 1) {
        return i;
      }
    }
  
    // Step 4: No non-repeating character found
    return -1;
  }
  