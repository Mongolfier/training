// Condition:
// Write a function that will find all sets of anagrams in a string.
// Anagrams - words made up of the same set of letters (lower owler rowel)

const str = "lore low track owl row role";

const getAnagrams = (str) => {
  const lexemList = str.split(" ");
  const sortedList = lexemList.map((lexem) => lexem.toLowerCase().split("").sort().join(""))

  const anagramList = new Set();

  for (let i = 0; i < sortedList.length; i++ ) {
    for(let j = i + 1; j < sortedList.length; j++) {
      if(sortedList[i] === sortedList[j]) {
        anagramList.add(lexemList[i])
        anagramList.add(lexemList[j])
      }
    }
  }

  return anagramList;
}

console.log(getAnagrams(str));