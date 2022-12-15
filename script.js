 document.querySelectorAll('.item').forEach(function listenToClick(element) {
  element.addEventListener('click',move);
 });

function move(clickedItem){
const checkIfClickedItemIsAlreadyAtCenter = clickedItem.target.classList[1] == 'positionCenter'

  if(checkIfClickedItemIsAlreadyAtCenter){
    return;
  }

let clickedKnowledgeBar = clickedItem.target.childNodes[3].childNodes[1].firstElementChild
let PositionOfClickedItem = clickedItem.target.classList[1];

let momentItemAtCenter = document.querySelector('.positionCenter');
let knowledgeBarOfMomentItemAtCenter = momentItemAtCenter.childNodes[3].childNodes[1].firstElementChild;

knowledgeBarOfMomentItemAtCenter.style.animationName=('fillOut');   

momentItemAtCenter.classList.replace('positionCenter', `${PositionOfClickedItem}`);
clickedItem.target.classList.replace(`${clickedItem.target.classList[1]}`,'positionCenter');

clickedKnowledgeBar.classList.add('fill');
clickedKnowledgeBar.style.animationName=('fillIn');

}
