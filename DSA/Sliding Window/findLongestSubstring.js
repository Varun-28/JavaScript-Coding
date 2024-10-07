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

function findLongestSubstring(s){
    let left = 0;
    let maxLength = 0;
    let charMap = new Map();  // To store the last index of each character

    for (let right = 0; right < s.length; right++) {
        // If character is already in the map, move the left pointer to the right of the last occurrence
        if (charMap.has(s[right])) {
            left = Math.max(left, charMap.get(s[right]) + 1);
        }

        // Update the map with the current character's index
        charMap.set(s[right], right);

        // Calculate the maximum length of substring found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring(''));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('bbbbbb'));
