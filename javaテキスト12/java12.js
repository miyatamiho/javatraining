let inputElement = document.getElementById("input_text");
let outputElement = document.getElementById("output_text");

inputElement.addEventListener("blur", function() {
    outputElement.textContent = inputElement.value;
  });