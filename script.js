import { translateEnglishToMorse } from "./translator.js";
const button = document
  .querySelector("button")
  .addEventListener("click", () => {
    let word = document.getElementById("english-input").value;
    const result = translateEnglishToMorse(word);
    alert(result);
  });
s;
