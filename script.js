//Calculator program
const display = document.getElementById("display");

// Append to display
const appendToDisplay = (input) => {
  display.value += input;
};

// Clearing display
const clearDisplay = () => {
  display.value = "";
};

// to claculate
const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error!";
  }
};
