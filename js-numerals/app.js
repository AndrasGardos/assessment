document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("number-input").oninput = handleNumberChange;
});

function handleNumberChange(e) {
  const numberInput = document.getElementById("number-input");
  const textOutput = document.getElementById("converted-number-output");
  const numberToConvert = parseInt(numberInput.value);

  if (!Number.isInteger(numberToConvert)) {
    textOutput.style.color = "red";
    textOutput.innerHTML = "Please enter a valid integer!";
    return;
  }

  if (!Number.isSafeInteger(numberToConvert)) {
    textOutput.style.color = "red";
    textOutput.innerHTML =
      "This integer is way too big! <br> Limits: ± 9 007 199 254 740 991";
    return;
  }

  try {
    const convertedNumber = convertNumber(numberToConvert);
    textOutput.style.color = "black";
    textOutput.innerText = convertedNumber;
  } catch (error) {
    textOutput.style.color = "red";
    textOutput.innerHTML =
      "Some unexpected error happened while converting your integer :(";
  }
}
