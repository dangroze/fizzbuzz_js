describe('Fizzbuzz', function() {

  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number', function() {

    it('is divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
    it('is not divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
    it('is divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
    it('is divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });
  describe('when divisible by 3', function() {
    it('returns Fizz', function() {
      expect(fizzbuzz.say(3)).toEqual('Fizz');
    });
  });
  describe('when divisible by 5', function() {
    it('returns Buzz', function() {
      expect(fizzbuzz.say(5)).toEqual('Buzz');
    });
  });
  describe('when divisible by 15', function() {
    it('returns FizzBuzz', function() {
      expect(fizzbuzz.say(15)).toEqual('FizzBuzz');
    });
  });

});
