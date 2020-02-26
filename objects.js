"use strict";


// 1. countWords
function countWords(phrase) {
  const splitPhrase = phrase.split(' ');
  const wordCounts = {};

  for (const word of splitPhrase){
    if(word in wordCounts){
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }

  if (!melonPrices.hasOwnProperty(price)) {
    return null;
  } else {
    return melonPrices[price].sort();
  }
}
