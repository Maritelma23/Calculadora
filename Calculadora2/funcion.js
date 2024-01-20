document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("#calculator button");

  let currentInput = "";
  let currentOperator = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      handleButtonClick(button.innerText);
    });
  });

  function handleButtonClick(value) {
    switch (value) {
      case "C":
        clearDisplay();
        break;
      case "=":
        calculateResult();
        break;
      default:
        updateDisplay(value);
        break;
    }
  }

  function clearDisplay() {
      currentInput = "";
      currentOperator = "";
      display.value = "";
  }

  function updateDisplay(value) {
      if (value === "0" && currentInput === "0") {
          // Evitar agregar más ceros si el valor actual ya es cero
          return;
        }
      
        currentInput += value;
        display.value = currentInput;
  }

  function calculateResult() {
    if (currentInput !== "") {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch (error) {
        display.value = "Error";
      }
    }
  }
});
