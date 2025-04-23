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
const calculate = () => {
    try {

        // validate input first 
        const expression = display.value;

        // Alternative to eval 
        const result = Function('"use strinct"; return(' + expression + ')')();
        // check if reesult is valid 
        if (isFinite(result)) {
            display.value = result;
        } else {
            display.value = "Error!:Invalid calculation!";
        }
    } catch (error) {
        display.value = "Error!";
    }
}

    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error!";
  }
};
