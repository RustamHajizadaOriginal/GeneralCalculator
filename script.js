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

// Calculate result
const calcula
// validate input first 
const expression = display.value;
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error!";
  }
};
