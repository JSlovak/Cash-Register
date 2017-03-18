
// Use DOM to do the following tasks.

// Create Contatiner for Register
var container = document.createElement("div");
container.id = "container";
//container.innerHTML = "CONTAINER";
document.body.appendChild(container);

// Create Display for Register

var display = document.createElement("div");
display.id = "display";
container.appendChild(display);

// Create Register Pad (buttons)
  // 3 compartments

  var registerPad = document.createElement("div");
  registerPad.id = "registerPad";
  container.appendChild(registerPad);

  var numbers = document.createElement("div");
  numbers.id = "numbers";
  registerPad.appendChild(numbers);

  var operators = document.createElement("div");
  operators.id = "operators";
  registerPad.appendChild(operators);

  var actions = document.createElement("div");
  actions.id = "actions";
  registerPad.appendChild(actions);

  var createActionButtons = (function(){
    for (var i=0; i < 4; i++){
    var buttons = document.createElement("buttons");
    buttons.id = "actionButtons" + i.toString();

    actions.appendChild(buttons);
    }

    actionButtons0.innerHTML = "WITHDRAW";

    actionButtons1.innerHTML = "DEPOSIT";

    actionButtons2.innerHTML = "BALANCE";
    actionButtons2.addEventListener("click", cashRegister.getBalance());
    actionButtons2.addEventListener("click", displayBalance());

      function displayBalance(){
        display.innerHTML = (cashRegister.getBalance).toString(1);
      }
      console.log(displayBalance());

    actionButtons3.innerHTML = " CLEAR ";

  })();

  var createNumberButtons = (function(){
    for (var i= 0; i <= 11; i++){
      var buttons = document.createElement("button");
      buttons.className = "numberButtons";
      buttons.innerHTML = i.toString();
      numbers.appendChild(buttons);
    }
  })();

  var createOperatorButtons = (function(){
    for (var i= 0; i < 5; i++){
      var buttons = document.createElement("button");
      buttons.id = "operatorButtons" + i.toString();
      operators.appendChild(buttons);
      }

    operatorButtons0.innerHTML = " + ";
    operatorButtons1.innerHTML = " - ";
    operatorButtons2.innerHTML = " / ";
    operatorButtons3.innerHTML = " x ";
    operatorButtons4.innerHTML = " = ";

  })();


    // 1 Actions - Clear, Withdraw, Deposit, Get Total
        // Create buttons
        // Create event listeners for each button
        // Connect functions to each event listeners
    // 2 Numbers & decimal point -
         // Create buttons
        // Create event listeners for each button
        // Connect functions to each event listeners
    // 3 Operators
         // Create buttons
        // Create event listeners for each button
        // Connect functions to each event listeners
