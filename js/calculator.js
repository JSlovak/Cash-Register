
var calculatorModule = (function(){

  var _memory = 0;
  var _total = 0;
  var calculator = {};
  var maxLength = 30;


  // Validations

  function isNum(x){
    if (typeof x !== "number"){
    throw new Error (" Numbers only. Try again, Felicia.");
    }
  }
  // Calc Functions

  calculator.load = function(newTotal) {
    if (isNum(newTotal)){
    _total = newTotal;
    return _total;
    }
  };

  calculator.getTotal = function() {
    return _total;
  };

  calculator.add = function(x){
    if (isNum(x)){
      _total += x;
    return _total;
    }
  };

  calculator.subtract = function(x){
    if (isNum(x)){
    _total -= x;
    return _total;
    }
  };

  calculator.multiply = function(x){
    if (isNum(x)){
    _total *= x;
    return _total;
   }
  };

  calculator.divide = function(x){
    if (isNum(x)){
    _total /= x;
    return _total;
    }
  };

  calculator.recallMemory = function(){
    return _memory;

  };

  calculator.saveMemory = function(){
    _memory = _total;
    return _memory;
  };

  calculator.clearMemory = function(){
    _memory = 0;
    return _memory;
  };

return calculator;

});

console.log(calculatorModule());

// Display

var display = (function() {


  function addDigit(){

  }

  function dot(){

  }

  function plusMinus(){

  }

  function clearAllClear(){

  }

  function operate(){

  }

  function calculate(){

  }

  function fixCurrent(){

  }


  return {
    addDigit: addDigit,
    dot: dot,
    plusMinus: plusMinus,
    clearAllClear: clearAllClear,
    operate: operate,
    calculate: calculate,
    fixCurrent:fixCurrent
  };

});
