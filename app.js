// This JavaScript code creates a simple web app that communicates with the OpenAI API
// to generate text completions based on user input.

// Log a message to the console to indicate that the script is connected
console.log("connected!");

// Define the API key for authentication with the OpenAI API
const API_KEY = "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";

// Create a button element from the HTML button tag
const buttonElement = document.querySelector('button');

// Select the input, submit button, and output elements from the DOM
let inputElement = document.querySelector('input');
let submitButton = document.querySelector("#submit");
let outputResponse = document.querySelector("#output_response");
let historyElement = document.querySelector('.history');

// Define an async function to get the generated message from the OpenAI API
async function getMessage() {
  // Log a message to the console when the submit button is clicked
  console.log("CLICKED!");
  // Configure the API request options
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: inputElement.value,
      max_tokens: 7,
      temperature: 0
    })
  };

  try {
    // Send a POST request to the OpenAI API with the configured options
    const response = await fetch(
      "https://api.openai.com/v1/completions",
      options
    );
    // Convert the response to JSON format
    const data = await response.json();
    // Log the received data to the console
    console.log(data);
    outputResponse.textContent = data.choices[0].text;
    if (data.choices[0].text) {
      const pElement = document.createElement('p')
      pElement.textContent = inputElement.value
      historyElement.append(pElement);
    }
  } catch (error) {
    console.error(error);
  }
}

submitButton.addEventListener("click", getMessage);

// Create a function that clears the previous input
function clearInput() {

}

buttonElement.addEventListener('click', clearInput);