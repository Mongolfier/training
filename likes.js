// Conditions:
//  You probably know the "like" system from Facebook and other pages. People can "like" blog posts,
// pictures or other items. We want to create the text that should be displayed next to such an item.

// Expamples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
  if(!Array.isArray(names)) {
    return console.log("its not array")
  }

  if(!names.length) return "no one likes this";
  if(names.length === 1) return `${names[0]} likes this`;
  if(names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if(names.length > 3) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}