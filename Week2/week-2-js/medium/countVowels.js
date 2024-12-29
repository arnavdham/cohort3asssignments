/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function isvowel(c)
{
  return (c==='a'||c==='e'||c==='i'||c==='o'||c==='u');
}

function countVowels(str) {
  let vc=0;
   let str1=str.toLowerCase().split("");
    for (let i=0;i<str.length;i++)
    {
      if (isvowel(str1[i]))
      {
        vc++;
      }
    }
  return vc;
}

module.exports = countVowels;