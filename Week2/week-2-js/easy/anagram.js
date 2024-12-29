/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var x=str1.toLowerCase().split("").sort().join("");
  var y=str2.toLowerCase().split("").sort().join("");
  console.log(x);
  console.log(y);
  return x===y;
}

module.exports = isAnagram;
