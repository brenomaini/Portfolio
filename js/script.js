const LanguageFlags = document.querySelectorAll(".languageFlag");

const observePageFocus = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
//
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observePageFocus.observe(el));

LanguageFlags.forEach((listenToClickAtFlag) => {
  clickedFlag = listenToClickAtFlag;
  listenToClickAtFlag.addEventListener("click", changeLanguage);
});

function changeLanguage(flagClicked) {
  selectedLanguage = flagClicked.target.classList;

  selectedLanguage.contains("selected")
    ? null
    : document.querySelector(".selected").classList.remove("selected"),
    selectedLanguage.add("selected");
}

const knowledgeItemClicked = document.querySelectorAll(".item");
knowledgeItemClicked.forEach(function listenToClick(clickedKnowledgeItem) {
  clickedKnowledgeItem.addEventListener("click", moveIfClicked);
});
const knowledgeLogoClicked = document.querySelectorAll(".logoIcon");
knowledgeLogoClicked.forEach(function listenToClick(clickedLogo) {
  clickedLogo.addEventListener("click", moveIfLogoClicked);
});

function moveIfClicked(clickedItem) {
  const checkIfClickedItemIsAlreadyAtCenter =
    clickedItem.target.classList[1] == "positionCenter";

  if (checkIfClickedItemIsAlreadyAtCenter) {
    return;
  }

  let PositionOfClickedItem = clickedItem.target.classList[1];

  let momentItemAtCenter = document.querySelector(".positionCenter");

  momentItemAtCenter.classList.replace(
    "positionCenter",
    `${PositionOfClickedItem}`
  );
  clickedItem.target.classList.replace(
    `${clickedItem.target.classList[1]}`,
    "positionCenter"
  );
}

/* Implementar movimento by click no logo (com um input hidden)*/
function moveIfLogoClicked(clickedLogo) {
  const clickedLogoID = clickedLogo.target.attributes["alt"].value;
  const checkIfClickedLogoIsAtCenter = document
    .querySelector(`#${clickedLogoID}`)
    .classList.contains("positionCenter");
  const clickedLogoItem = document.querySelector(`#${clickedLogoID}`);
  const momentLogoAtCenter = document.querySelector(".positionCenter");
  const positionOfClicked = clickedLogoItem.classList[1];

  checkIfClickedLogoIsAtCenter
    ? null
    : clickedLogoItem.classList.replace(
        `${positionOfClicked}`,
        "positionCenter"
      ),
    momentLogoAtCenter.classList.replace(
      "positionCenter",
      `${positionOfClicked}`
    );
}

const listedProjects = document.querySelectorAll(".square");

listedProjects.forEach((project) => {
  projectMouseOverObserver = project;

  projectMouseOverObserver.addEventListener("mouseenter", mouseOverProject);
  projectMouseOverObserver.addEventListener("mouseleave", mouseOverProject);
});

function mouseOverProject(selectedProject) {
  selectedSquare = selectedProject.target;

  if (selectedProject.type == "mouseenter") {
    selectedSquare.children[0].classList.replace(
      "projectShow",
      "projectHidden"
    );
    selectedSquare.children[1].classList.replace(
      "projectHidden",
      "projectShow"
    );
  } else {
    selectedSquare.children[1].classList.replace(
      "projectShow",
      "projectHidden"
    );
    selectedSquare.children[0].classList.replace(
      "projectHidden",
      "projectShow"
    );
  }
}
