const IsogramFinder = function (word) {
  this.word = word;
}

// IsogramFinder.prototype.isIsogram = function () {
//   removeDupes = new Set(this.word.toLowerCase().split(''));
//   return this.word.length === removeDupes.size;
// }
IsogramFinder.prototype.isIsogram = function () {
  sortedArray = this.word.toLowerCase().split('').sort();
  return sortedArray.every((letter, index) => {
    return letter !== sortedArray[index-1];
  });
}

module.exports = IsogramFinder;
