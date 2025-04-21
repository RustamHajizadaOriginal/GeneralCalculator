//Calculator program

const display = document.getElementById("display");
const btn1 = document.getElementById("btn1");

// append to display
const appendToDisplay = (input) => {
  display.value += input;
};

// for clearing display
const clearDisplay = () => {
  display.value = "";
};

// to claculate
const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
