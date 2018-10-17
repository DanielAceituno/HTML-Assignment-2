function changeToLO(){
    document.getElementById("sr0").style.display="none";
    document.getElementById("sr1").style.display="none";
    document.getElementById("sr2").style.display="block";
}

function changeToPI(){
    document.getElementById("sr0").style.display="none";
    document.getElementById("sr1").style.display="block";
    document.getElementById("sr2").style.display="none";
}

function changeToHome(){
    document.getElementById("sr0").style.display="block";
    document.getElementById("sr1").style.display="none";
    document.getElementById("sr2").style.display="none";
}

function addTag(){
  if(!checkEmptyBox()){
    var newTag=document.createElement("li");
    newTag.innerHTML='<p style="display:inline-block" contenteditable="true">&nbsp</p><button onclick="removeBox(this)">x</button>'
    newTag.className="element_preference";
    var currentList=document.getElementById("tag_list");
    currentList.appendChild(newTag);
  }
}

function checkEmptyBox(){
  var content=document.getElementById("tag_list").lastChild.innerHTML;
  if(content=='<p style="display:inline-block" contenteditable="true">&nbsp;</p><button onclick="removeBox(this)">x</button>'){
    return true;
  }
  return false;
}

function removeBox(selectedElement){
  selectedElement.parentNode.parentNode.removeChild(selectedElement.parentNode);
}

function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function popUp2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}

function popUp3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}
