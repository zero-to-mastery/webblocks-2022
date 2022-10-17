const eventHandler = {
  mainDisplay: document.querySelector('.main-display'),
  subDisplay: document.querySelector('.mini-display'),
  calculatorButtons: document.querySelector('.calc-buttons'),
}

let values = {
  displayValue: '',
  num1: 0,
  op: '',
  disabled: false
}

const operationHandler = {
  add: function(num1, num2) {
      return roundingDecimal(num1 + num2);
  },
  min: function(num1, num2) {
      return roundingDecimal(num1 - num2);
  },
  mul: function(num1, num2) {
      return roundingDecimal(num1 * num2);
  },
  div: function(num1, num2) {
      return roundingDecimal(num1 / num2);
  },
  sum: function(operator, num1, num2) {
      clear();
      let answer = this[operator](num1, num2);
      eventHandler.mainDisplay.textContent = answer;
  }
}

function clear() {
  values.displayValue = '';
  values.num1 = 0;
  values.op = '';
  values.disabled = false;
  eventHandler.mainDisplay.textContent = 0;
  eventHandler.subDisplay.textContent = '';
}

function backspace() {
  // Check for decimal
  if (values.displayValue[values.displayValue.length - 1] === '.') {
      values.disabled = false;
  }

  values.displayValue = values.displayValue.slice(0, values.displayValue.length - 1);

  // Check if there's value after slicing
  if (!values.displayValue) {
      eventHandler.mainDisplay.textContent = 0;
  } else {
      eventHandler.mainDisplay.textContent = values.displayValue;
  }
}

function roundingDecimal(value) {
  return Math.round(value * 10) / 10;
}

function populateDisplay(e) {
  const target = e.target;
  const buttonContent = target.textContent;
  const operationContent = target.dataset.operation;

  // If user clicks 0 while the display is 0 it will do nothing
  if (eventHandler.mainDisplay.textContent === '0' && buttonContent === '0') {
      eventHandler.mainDisplay.textContent = 0;

    // Else update the display with the button that is clicked
  } else if ( !isNaN(buttonContent) ) {
      values.displayValue += buttonContent;
      eventHandler.mainDisplay.textContent = values.displayValue;
  }

  if (target.id === 'clear') {
      clear();
  }

  if (target.id === 'backspace') {
      backspace()
  }
  
  // If the button has data attribute
  if (operationContent) {
      if (operationContent === 'sum') {

          operationHandler.sum(values.op, +values.num1, +values.displayValue);
          eventHandler.subDisplay.textContent = '';

        // If there's a value in num1 and op
      } else if (values.num1 && values.op) {
          
          // Then calculate the total with the existing values
          eventHandler.mainDisplay.textContent = operationHandler[values.op](+values.num1, +values.displayValue);

          // Chained the operation and display it on sub display
          eventHandler.subDisplay.textContent += `${values.displayValue} ${buttonContent} `;
          
          // Overwrite the old values for next calculation
          values.op = operationContent;
          values.displayValue = '';
          values.num1 = eventHandler.mainDisplay.textContent;            
          
      } else if (!values.op && eventHandler.mainDisplay.textContent !== '0') {
          values.op = operationContent;
          values.num1 = values.displayValue;

          eventHandler.subDisplay.textContent += `${values.displayValue} ${buttonContent} `;
          
          values.displayValue = '';
          values.disabled = false;
      }
      
  }

  // Decimal button
  if (buttonContent === '.') {
      
      if (!values.disabled) {
          values.displayValue += buttonContent;
          eventHandler.mainDisplay.textContent = values.displayValue;

          values.disabled = true;
      }         
  }
}

eventHandler.calculatorButtons.addEventListener('click', populateDisplay);