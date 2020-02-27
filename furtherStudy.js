"use strict";


function wordsInCommon(words1, words2) {
  // Replace this with your code
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();
  for(const word of words1Set){
    if(words2Set.has(word)){
      result.add(word);
    }
  }
  return Array.from(result);
}


function kidsGame(names) {
  const output = [names.shift()];
  const firstLetterToWords = {};

  for (const name of names) {
    const firstLetter = name[0]
    if (!firstLetterToWords.hasOwnProperty(firstLetter)) {
      firstLetterToWords[firstLetter] = [name];
    } else {
      firstLetterToWords[firstLetter].push(name);
    }
  }

  while (true) {
    const finalWord = output[output.length - 1];
    const startLetter = finalWord[finalWord.length - 1];

    if (!firstLetterToWords.hasOwnProperty(startLetter)) {
      break;
    }

    const word = firstLetterToWords[startLetter].shift();
    if (word !== undefined) {
      output.push(word);
    } else {
      break;
    }
  }

  return output;
}
