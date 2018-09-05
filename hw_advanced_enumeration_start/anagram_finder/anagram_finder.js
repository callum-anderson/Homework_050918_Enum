const AnagramFinder = function (word) {
  this.word = word.toLowerCase();
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter((word) => {
    return word.toLowerCase().split('').every((letter) => {
      return this.word.includes(letter);
    }) && (word.length === this.word.length) && (word !== this.word);
  });
}

module.exports = AnagramFinder;
