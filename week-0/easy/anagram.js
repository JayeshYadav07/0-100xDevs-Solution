/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // checking the size
  if (str1.length != str2.length) return false;

  // converting to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // counting the letter
  let countLetter = {};
  for (let i = 0; i < str1.length; i++) {
    countLetter[str1[i]] =
      countLetter[str1[i]] == undefined ? 1 : countLetter[str1[i]] + 1;
  }

  // compering the countLetter with str2 letter
  for (let i = 0; i < str2.length; i++) {
    if (countLetter[str2[i]] == undefined || countLetter[str2[i]] == 0) {
      return false;
    } else {
      countLetter[str2[i]]--;
    }
  }
  return true;
}

module.exports = isAnagram;
