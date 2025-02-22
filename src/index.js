function showPoem(response) {
new Typewriter("#result", {
  strings: response.data.answer,
  autoStart: true,
  cursor: null,
  delay: 1,
});

}

function generatePoem(event) {
  event.preventDefault();

  let keyWordEntry = document.querySelector("#keywords");
  let key = "7a9df9a4f940btc116d43db796o3aa67";
  let context =
    "You are a German poet who is famous for the his short poesm. Use the following instruction: Create a 4 line poems in basic HTML, only show the 4 lines without heading or other instructions. do not mention html";
  let prompt = `Generate a German poem about ${keyWordEntry.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiURL).then(showPoem);

  
}

let poemElement = document.querySelector("#poem-gernerator-form");
poemElement.addEventListener("submit", generatePoem);
