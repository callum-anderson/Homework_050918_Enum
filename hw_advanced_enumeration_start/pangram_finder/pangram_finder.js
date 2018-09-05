const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every((letter) => {
    return this.phrase.toLowerCase().split('').includes(letter);
  })
  //create set from sentence to remove duplicate letters, convert back to array, then sort
  // const sortedUnique = [...new Set(this.phrase.split(''))].sort();
  //remove white space at index 0
  // sortedUnique.splice(0,1);
  //compare 'abcde...' to 'abcde...' - will return true or false
  // return this.alphabet.sort();
  // return sortedUnique === this.alphabet.sort();
}

module.exports = PangramFinder;
