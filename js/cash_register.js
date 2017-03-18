
var cashRegister = (function(){

  var balance = 0;
  var deposit;

  function getBalance(){
    if (balance === 0){
      return "MAKE SOME MONEY!";
    } else
      {
        return balance;
      }
  }

  function depositCash(amount){
    var newBalance = balance - amount;
    balance = newBalance;
    return balance;
  }

  function withdrawCash(amount){
    var newBalance = balance - amount;
    balance = newBalance;
    return balance;
  }


  return {
    getBalance: getBalance,
    depositCash: depositCash,
    withdrawCash: withdrawCash,
  };

})();

console.log(cashRegister.getBalance());
