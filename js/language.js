const nav = [
  document.getElementById("HomeNav"),
  document.getElementById("KnowledgeNav"),
  document.getElementById("SkillsNav"),
  document.getElementById("ProjectsNav"),
  document.getElementById("ContactNav"),
];
let actualFlag = "pt-br";

LanguageFlags.forEach((listenToClickAtFlag) => {
  clickedFlag = listenToClickAtFlag;
  listenToClickAtFlag.addEventListener("click", changeLanguage);
});

function changeLanguage(flagClicked) {
  selectedLanguage = flagClicked.target.classList;

  selectedLanguage.contains("selected")
    ? null
    : document.querySelector(".selected").classList.remove("selected"),
    selectedLanguage.add("selected"),
    (actualFlag = selectedLanguage[1]),
    setLanguage();
}

function setLanguage() {}
