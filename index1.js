let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = '';

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log('button text is ', buttonText);
    
    if (buttonText == 'X') {
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
    } 
    else if (buttonText == 'AC') {
      screenValue = "";
      screen.value = screenValue;
    } 
    else if (buttonText == '=') {
      try {
        screen.value = eval(screenValue);
        screenValue = screen.value;
      } catch (e) {
        screen.value = "Error";
        screenValue = "";
      }
    } 
    else if (buttonText == 'DEL') {
      screenValue = screenValue.substring(0, screenValue.length - 1);
      screen.value = screenValue;
    } 
    else if (buttonText == '%') {
      // Evaluate the expression first
      try {
        screenValue = eval(screenValue).toString();
        // Calculate the percentage of the result
        screenValue = (parseFloat(screenValue) / 100).toString();
        screen.value = screenValue;
      } catch (e) {
        screen.value = "Error";
        screenValue = "";
      }
    } 
    else if (buttonText == 'sin') {
      screenValue = Math.sin(toRadians(parseFloat(screenValue))).toString();
      screen.value = screenValue;
    } 
    else if (buttonText == 'cos') {
      screenValue = Math.cos(toRadians(parseFloat(screenValue))).toString();
      screen.value = screenValue;
    } 
    else if (buttonText == 'tan') {
      screenValue = Math.tan(toRadians(parseFloat(screenValue))).toString();
      screen.value = screenValue;
    } 
    else if (buttonText == 'log') {
      screenValue = Math.log10(parseFloat(screenValue)).toString();
      screen.value = screenValue;
    } 
    else if (buttonText == 'ln') {
      screenValue = Math.log(parseFloat(screenValue)).toString();
      screen.value = screenValue;
    } 
    else if (buttonText == '√') {
      screenValue = Math.sqrt(parseFloat(screenValue)).toString();
      screen.value = screenValue;
    } 
    else if (buttonText == 'π') {
      screenValue += Math.PI.toString();
      screen.value = screenValue;
    } 
    else if (buttonText == 'exp') {
      screenValue = Math.exp(parseFloat(screenValue)).toString();
      screen.value = screenValue;
    } 
    else if (buttonText == '1/x') {
      screenValue = (1 / parseFloat(screenValue)).toString();
      screen.value = screenValue;
    } 
    else if (buttonText == 'x!') {
      screenValue = factorial(parseInt(screenValue)).toString();
      screen.value = screenValue;
    } 
    else if (buttonText == 'mod') {
      screenValue += '%';
      screen.value = screenValue;
    } 
    else 
    {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}