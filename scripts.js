function changeToLO(){
    document.getElementById("sl").style.display="block";
    document.getElementById("sr0").style.display="none";
    document.getElementById("sr1").style.display="none";
    document.getElementById("sr2").style.display="block";
    document.getElementById("logReg").style.display="none";
    document.getElementById("register").style.display="none";
}

function changeToPI(){
    document.getElementById("sl").style.display="block";
    document.getElementById("sr0").style.display="none";
    document.getElementById("sr1").style.display="block";
    document.getElementById("sr2").style.display="none";
    document.getElementById("logReg").style.display="none";
    document.getElementById("register").style.display="none";
}

function changeToHome(){
    document.getElementById("sl").style.display="block";
    document.getElementById("sr0").style.display="block";
    document.getElementById("sr1").style.display="none";
    document.getElementById("sr2").style.display="none";
    document.getElementById("logReg").style.display="none";
    document.getElementById("register").style.display="none";
}

function changeToLogReg(){
    document.getElementById("sl").style.display="none";
    document.getElementById("sr0").style.display="none";
    document.getElementById("sr1").style.display="none";
    document.getElementById("sr2").style.display="none";
    document.getElementById("logReg").style.display="block";
    document.getElementById("register").style.display="none";
}

function changeToRegister(){
  document.getElementById("sl").style.display="none";
  document.getElementById("sr0").style.display="none";
  document.getElementById("sr1").style.display="none";
  document.getElementById("sr2").style.display="none";
  document.getElementById("logReg").style.display="none";
  document.getElementById("register").style.display="block";
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
