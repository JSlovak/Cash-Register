
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
    for (var i= 0; i < 4; i++){
    var buttons = document.createElement("button");
    buttons.id = "actionButtons" + i.toString();
    buttons.className = "actionButtons";
    actions.appendChild(buttons);
    }

    actionButtons0.innerHTML = " WITHDRAW ";
    actionButtons1.innerHTML = " DEPOSIT ";
    actionButtons2.innerHTML = " BALANCE ";
    actionButtons3.innerHTML = " CLEAR ";

  })();

  var createNumberButtons = (function(){
    for (var i= 0; i < 10; i++){
      var buttons = document.createElement("button");
      buttons.id = "numberButtons" + i.toString();
      buttons.className = "numberButtons";
      buttons.innerHTML = i.toString();
      numbers.appendChild(buttons);
    }
  })();

  var createOperatorButtons = (function(){
    for (var i= 0; i < 5; i++){
      var buttons = document.createElement("button");
      buttons.id = "operatorButtons" + i.toString();
      buttons.className = "operatorButtons";
      operators.appendChild(buttons);
      }

    operatorButtons0.innerHTML = " + ";
    operatorButtons1.innerHTML = " - ";
    operatorButtons2.innerHTML = " / ";
    operatorButtons3.innerHTML = " x ";
    operatorButtons4.innerHTML = " = ";

  })();


  // Create event listeners for each button
    // Action Buttons
    actionButtons0.addEventListener("click", handleClick);
    actionButtons1.addEventListener("click", handleClick);
    actionButtons2.addEventListener("click", handleClick);
    actionButtons3.addEventListener("click", handleClick);

    // Numbers
    numberButtons0.addEventListener("click", handleClick);
    numberButtons1.addEventListener("click", handleClick);
    numberButtons2.addEventListener("click", handleClick);
    numberButtons3.addEventListener("click", handleClick);
    numberButtons4.addEventListener("click", handleClick);
    numberButtons5.addEventListener("click", handleClick);
    numberButtons6.addEventListener("click", handleClick);
    numberButtons7.addEventListener("click", handleClick);
    numberButtons8.addEventListener("click", handleClick);
    numberButtons9.addEventListener("click", handleClick);

    // Operators
    operatorButtons0.addEventListener("click", handleClick);
    operatorButtons1.addEventListener("click", handleClick);
    operatorButtons2.addEventListener("click", handleClick);
    operatorButtons3.addEventListener("click", handleClick);
    operatorButtons4.addEventListener("click", handleClick);

  // Connect functions to each event listeners

  function handleClick(evt){
    console.log(evt);
    console.log(this);
    console.log(this.id);
    console.log(cashRegister.getBalance);

    switch(this.id) {

    case "actionButtons0": // WITHDRAW Button

    display.innerHTML = "YOU TOOK OUT MONEY.";
    break;

    case"actionButtons1": // DEPOSIT Button
    display.innerHTML = "THANKS FOR YOUR DEPOSIT.";
    break;

    case"actionButtons2": // BALANCE Button
    display.innerHTML = cashregister.getBalance;
    break;

    case"actionButtons3": // CLEAR Button
    display.innerHTML = "ALL CLEAR!!";
    break;

    case"numberButtons0":
    display.innerHTML = 0;
    break;

    case"numberButtons1":
    display.innerHTML = 1;
    break;

    case"numberButtons2":
    display.innerHTML = 2;
    break;

    case"numberButtons3":
    display.innerHTML = 3;
    break;

    case"numberButtons4":
    display.innerHTML = 4;
    break;

    case"numberButtons5":
    display.innerHTML = 5;
    break;

    case"numberButtons6":
    display.innerHTML = 6;
    break;

    case"numberButtons7":
    display.innerHTML = 7;
    break;

    case"numberButtons8":
    display.innerHTML = 8;
    break;

    case"numberButtons9":
    display.innerHTML = 9;
    break;

    case"operatorButtons0": // + Button
    display.innerHTML = "+";
    break;

    case"operatorButtons1": // - Button
    display.innerHTML = "-";
    break;

    case"operatorButtons2": // / Button
    display.innerHTML = "/";
    break;

    case"operatorButtons3": // x Button
    display.innerHTML = "x";
    break;

    case"operatorButtons4": // = Button
    //display.push("value of button")
    display.innerHTML = "=";
    break;
    }
 }