let translateEN = {};
let translatePTBR = {};

let actualFlag = navigator.language;

window.addEventListener("load", async () => {
  try {
    const pullENTranslate = await fetch("./languages/en.json");
    translateEN = await pullENTranslate.json();

    const pullPtBRTranslate = await fetch("./languages/pt-BR.json");
    translatePTBR = await pullPtBRTranslate.json();

    setLanguage(actualFlag);
    let flagToHighlight = document.getElementsByClassName(`${actualFlag}`)[0];

    flagToHighlight.classList.contains("selected")
      ? null
      : document.querySelector(".selected").classList.remove("selected"),
      flagToHighlight.classList.add("selected"),
      (actualFlag = flagToHighlight[1]);
  } catch (error) {
    console.log(error);
  }
});

LanguageFlags.forEach((listenToClickAtFlag) => {
  listenToClickAtFlag.addEventListener("click", changeLanguage);
});

function changeLanguage(flagClicked) {
  let selectedLanguage = flagClicked.target.classList;

  selectedLanguage.contains("selected")
    ? null
    : document.querySelector(".selected").classList.remove("selected"),
    selectedLanguage.add("selected"),
    (actualFlag = selectedLanguage[1]),
    setLanguage(actualFlag);
}

function setLanguage(language) {
  const textToTranslate = document.getElementsByTagName("*");

  if (language == "pt-BR") {
    for (let text of textToTranslate) {
      let hasLngTag = text.getAttribute("lng-tag");
      let selectedTag = text;

      if (hasLngTag != null) {
        selectedTag.innerHTML = translatePTBR[hasLngTag];
      }
    }
  } else {
    for (let text of textToTranslate) {
      let hasLngTag = text.getAttribute("lng-tag");
      let selectedTag = text;
      let buttonContact = document.getElementsByClassName("submit");
      buttonContact[0].value = "Submit";

      if (hasLngTag != null) {
        selectedTag.innerHTML = translateEN[hasLngTag];
      }
    }
  }
}
