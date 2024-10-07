/*
Write a function called findLongestSubstring, which accepts a string and returns the 
length of the longest substring with all distinct characters.

    findLongestSubstring('') // 0
    findLongestSubstring('rithmschool') // 7
    findLongestSubstring('thisisawesome') // 6
    findLongestSubstring('thecatinthehat') // 7
    findLongestSubstring('bbbbbb') // 1
    findLongestSubstring('longestsubstring') // 8
    findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
*/

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let left = 0;
   
    for (let right = 0; right < str.length; right++) {
      let char = str[right];
      // If character is already in the map, move the left pointer to the last occurrence
      if (seen[char]) {
        left = Math.max(left, seen[char]);
      }
      
      // Calculate the maximum length of substring found so far
      longest = Math.max(longest, right - left + 1);

      // Update the map with the current character's position
      seen[char] = right + 1;
    }
    return longest;
  }

console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring(''));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('bbbbbb'));
