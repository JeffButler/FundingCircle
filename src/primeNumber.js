/**

Run time: O(n*p)

n being the number that is reached and P, being the number of primes.

**/

(function() {
  var PRIME_SIZE = 10;
  var primes = [2];

  var vm = this;
  vm.getNextPrime = getNextPrime;
  vm.printRows = printRows;

  function getNextPrime(_primes) {
    var next = _primes[_primes.length - 1] + 1;
    while(_primes.reduce(function(x,y){ return (next % x == 0) || (next % y == 0)}, false)) {
      next++;
    }
    return next;
  }

  function printRows(_primes) {
    for (var row = 0; row < _primes.length; row++) {
      var line = [];
      for (var column = 0; column < _primes.length; column++) {
        line.push(_primes[row] * _primes[column]);
      }
      console.log(line.join(" "));
    }
  }

  while(primes.length < PRIME_SIZE) {
    primes.push(getNextPrime(primes));
  }
  printRows(primes);

})();
