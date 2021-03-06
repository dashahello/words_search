const HEIGHT = 20;
const WIDTH = 30;

const array = [
  ["d", "t", "b", "r", "n", "v", "i", "r", "f", "n", "m", "m", "n", "l", "o", "a", "k", "h", "r", "d", "b", "q", "m", "q", "d", "q", "c", "o", "t", "y"],
  ["r", "s", "o", "o", "q", "v", "d", "e", "k", "t", "y", "a", "u", "k", "j", "t", "o", "l", "g", "s", "p", "d", "z", "k", "p", "s", "l", "p", "q", "l"],
  ["q", "c", "o", "p", "m", "b", "f", "j", "b", "g", "u", "u", "q", "z", "o", "c", "l", "j", "k", "u", "z", "w", "t", "t", "y", "c", "n", "f", "p", "d"],
  ["u", "d", "d", "j", "i", "f", "m", "c", "u", "p", "z", "a", "s", "g", "m", "o", "a", "m", "p", "e", "w", "v", "n", "z", "p", "a", "p", "q", "e", "r"],
  ["h", "n", "s", "s", "d", "b", "l", "b", "x", "j", "p", "z", "z", "d", "l", "h", "v", "p", "i", "z", "f", "a", "p", "m", "s", "e", "p", "v", "k", "q"],
  ["p", "z", "h", "n", "y", "o", "f", "e", "s", "o", "l", "v", "p", "b", "v", "e", "u", "d", "s", "r", "c", "e", "b", "d", "m", "p", "i", "y", "p", "m"],
  ["m", "l", "w", "v", "p", "k", "j", "d", "b", "i", "s", "i", "f", "s", "f", "x", "m", "q", "u", "m", "q", "v", "h", "f", "p", "q", "n", "u", "k", "b"],
  ["k", "r", "o", "o", "u", "i", "n", "a", "d", "e", "x", "e", "n", "y", "o", "j", "t", "p", "f", "l", "k", "o", "h", "r", "x", "d", "p", "t", "g", "v"],
  ["s", "v", "w", "m", "o", "y", "m", "r", "f", "n", "n", "i", "h", "v", "y", "h", "y", "i", "p", "o", "p", "w", "s", "c", "s", "h", "a", "r", "o", "s"],
  ["j", "c", "r", "y", "b", "j", "f", "d", "n", "h", "x", "z", "u", "c", "w", "e", "c", "q", "q", "x", "e", "t", "s", "e", "p", "z", "a", "b", "i", "j"],
  ["v", "f", "d", "m", "y", "f", "m", "z", "x", "r", "n", "q", "g", "r", "g", "j", "f", "d", "k", "i", "z", "x", "f", "s", "d", "f", "x", "b", "c", "k"],
  ["y", "n", "x", "r", "u", "k", "p", "i", "q", "i", "e", "q", "a", "m", "v", "m", "h", "t", "b", "z", "z", "y", "t", "v", "y", "o", "a", "k", "r", "c"],
  ["l", "b", "z", "n", "o", "w", "t", "u", "e", "j", "t", "l", "c", "c", "b", "i", "b", "x", "b", "h", "s", "a", "g", "x", "r", "e", "k", "s", "y", "k"],
  ["i", "d", "s", "i", "z", "f", "a", "g", "z", "a", "m", "i", "i", "m", "s", "l", "v", "z", "y", "i", "s", "q", "i", "o", "w", "o", "g", "d", "z", "k"],
  ["m", "k", "n", "w", "q", "z", "y", "h", "x", "b", "w", "e", "p", "l", "x", "p", "b", "v", "g", "q", "w", "s", "l", "g", "a", "m", "x", "l", "c", "m"],
  ["b", "j", "c", "j", "y", "e", "j", "g", "g", "x", "h", "q", "b", "n", "d", "x", "o", "e", "v", "j", "x", "n", "y", "n", "q", "r", "a", "b", "e", "e"],
  ["v", "x", "w", "s", "r", "z", "n", "i", "x", "s", "q", "j", "s", "u", "d", "u", "h", "d", "l", "k", "i", "r", "u", "k", "a", "i", "t", "v", "m", "o"],
  ["x", "a", "l", "y", "p", "v", "r", "w", "j", "y", "k", "w", "t", "z", "h", "l", "u", "c", "g", "e", "w", "d", "m", "t", "g", "w", "k", "d", "x", "f"],
  ["a", "b", "o", "v", "c", "o", "p", "q", "b", "s", "v", "o", "a", "z", "h", "n", "k", "n", "o", "h", "j", "q", "p", "r", "q", "i", "j", "m", "c", "x"],
  ["k", "z", "v", "o", "f", "r", "t", "o", "z", "p", "h", "z", "c", "f", "b", "x", "l", "a", "k", "i", "w", "s", "d", "p", "a", "b", "u", "p", "b", "l"]
];


const WORDS = ['cat', 'cry', 'run', 'try', 'tree'];
const result = [];

for (let word of WORDS) {
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      if (word[0] === array[y][x]) {
        const wordsToCheck = ['', '', '', '', '', '', '', ''];
        for (let ci = 0; ci < word.length; ci++) {
          wordsToCheck[0] += array[y][x + ci] || '';
          wordsToCheck[1] += array[y][x - ci] || '';
          wordsToCheck[2] += array[y + ci]?.[x] || '';
          wordsToCheck[3] += array[y - ci]?.[x] || '';
          wordsToCheck[4] += array[y + ci]?.[x + ci] || '';
          wordsToCheck[5] += array[y - ci]?.[x - ci] || '';
          wordsToCheck[6] += array[y - ci]?.[x + ci] || '';
          wordsToCheck[7] += array[y + ci]?.[x - ci] || '';
        }
        for (let wi = 0; wi < wordsToCheck.length; wi++) {
          if (wordsToCheck[wi] === word) {
            result[result.length] = wordsToCheck[wi];
          }
        }
      }
    }
  }
}

console.log('Found words: ', new Set(result));
