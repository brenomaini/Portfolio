import { actualFlag } from "./script";

const nav = [
  document.getElementById("HomeNav").innerText,
  document.getElementById("KnowledgeNav").innerText,
  document.getElementById("SkillsNav").innerText,
  document.getElementById("ProjectsNav").innerText,
  document.getElementById("ContactNav").innerText,
];

function setLanguage() {
  if (actualFlag == "ptbr") {
    nav[0] = "Oi";
    nav[1] = "Será";
    nav[2] = "Que";
    nav[3] = "Funfa?";
    nav[4] = "VamoeVe";
  }
}
