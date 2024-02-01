/**
 * Task-5:
Capitalize Every first Letter of each word in a String
 */

function capitalizeEveryFirstLetter(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words back into a single string
  const result = capitalizedWords.join(" ");

  return result;
}

// Example usage:
const inputString = "this is an example string.";
const capitalizedString = capitalizeEveryFirstLetter(inputString);

console.log("Original String:", inputString);
console.log("Modified String:", capitalizedString);