var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add 1 to 4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('can subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  });

  it('divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  });

  it('concatenate multiple number button clicks', function(){
    calculator.numberClick(2);
    calculator.numberClick(6);
    assert.strictEqual(calculator.runningTotal, 26);
  });

  it('chain multiple operations together', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.operatorClick('/');
    calculator.numberClick(4);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 2);
  });

  it('clear the running total without affecting the calulation', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 14);
  })

});
