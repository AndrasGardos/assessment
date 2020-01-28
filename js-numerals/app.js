document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("number-to-convert").oninput = handleNumberChange;
});

function handleNumberChange(e) {
  const numberInput = document.getElementById("number-to-convert");
  const textOutput = document.getElementById("converted-number");
  const convertedNumber = convertNumber(numberInput.value);

  if (convertedNumber) {
    textOutput.style.color = "black";
    textOutput.innerText = convertedNumber;
  } else {
    textOutput.style.color = "red";
    textOutput.innerHTML = "Please enter a valid integer!";
  }
}
