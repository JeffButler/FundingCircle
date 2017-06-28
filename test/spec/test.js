(function () {
  'use strict';

  describe('Prime Number', function () {
    describe('getNextPrime', function () {
      it('should return 3 if given primes [2]', function () {
        expect(getNextPrime([2])).toEqual(3);
      });
      it('should return 17 if given primes [2,3,5,7,11,13]', function() {
        expect(getNextPrime([2,3,5,7,11,13])).toEqual(17);
      })
    });
    describe('printRows', function() {
      it('should return console logs the same size as the number of primes', function () {
        spyOn(console, 'log');
        printRows([2,3,5,7,11,13,17,19,23,29]);
        expect(console.log.calls.count()).toEqual(10);
        printRows([2]);
        expect(console.log.calls.count()).toEqual(11);
        printRows([3,5]);
        expect(console.log.calls.count()).toEqual(13);
      });
      it('should console log multiplied rows ', function () {
        spyOn(console, 'log');
        printRows([2]);
        expect(console.log).toHaveBeenCalledWith('4');
        printRows([2,3]);
        expect(console.log).toHaveBeenCalledWith('4 6');
        printRows([2,3,5]);
        expect(console.log).toHaveBeenCalledWith('4 6 10');
      });
    });
  });
})();
