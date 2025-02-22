function generatePoem (event) {
    event.preventDefault();

    new Typewriter("#result", {
      strings: "Hello World",
      autoStart: true,
      cursor: null,
      delay: 1,
    });
}

let poemElement = document.querySelector("#poem-gernerator-form");
poemElement.addEventListener("submit", generatePoem);