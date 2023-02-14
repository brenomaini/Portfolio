let actualFlag = "ptbr";

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
    selectedLanguage.add("selected"),
    (actualFlag = selectedLanguage[1]);
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

const form = document.getElementById("ContactInfo");

form.addEventListener("submit", formSubmit);

async function formSubmit(e) {
  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const info = document.getElementById("Info").value;
  e.preventDefault();

  try {
    await fetch(
      "https://docs.google.com/forms/u/1/d/e/1FAIpQLScffuQoQycipC5f9ABkk6dUDgKhVab6SJ1JJnTXqhclSYZUbg/formResponse",
      {
        credentials: "include",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
          "Accept-Language": "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3",
          "Content-Type": "application/x-www-form-urlencoded",
          "Alt-Used": "docs.google.com",
          "Upgrade-Insecure-Requests": "1",
          "Sec-Fetch-Dest": "document",
          "Sec-Fetch-Mode": "navigate",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-User": "?1",
        },
        referrer:
          "https://docs.google.com/forms/d/e/1FAIpQLScffuQoQycipC5f9ABkk6dUDgKhVab6SJ1JJnTXqhclSYZUbg/viewform?fbzx=3758937148958631696",
        body: `entry.1850254109=${name}&entry.476346648=${email}.com&entry.1275965327=${info}`,
        method: "POST",
        mode: "no-cors",
      }
    ).then((res) => {
      form.reset();

      actualFlag == "ptbr"
        ? alert("Obrigado, entrarei em contato o mais breve possível!")
        : alert("Thank You, i'll contact you ASAP!");
    });

    window.location.href = "#";
  } catch (error) {
    alert(error + ": " + "Error please refresh your browser");
  }
}

export { actualFlag };
