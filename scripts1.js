function changeToLO(){//Method to go to last opinions site
    document.getElementById("sl").style.display="block";
    document.getElementById("sr0").style.display="none";
    document.getElementById("sr1").style.display="none";
    document.getElementById("sr2").style.display="block";
}

function changeToPI(){//Method to go to personal information site
    document.getElementById("sl").style.display="block";
    document.getElementById("sr0").style.display="none";
    document.getElementById("sr1").style.display="block";
    document.getElementById("sr2").style.display="none";
}

function changeToHome(){//Method to go to homepage
    document.getElementById("sl").style.display="block";
    document.getElementById("sr0").style.display="block";
    document.getElementById("sr1").style.display="none";
    document.getElementById("sr2").style.display="none";
}


function addTag(){//Method to add a tag to the list of preferences
  if(!checkEmptyBox()){
    var newTag=document.createElement("li");
    newTag.innerHTML='<p style="display:inline-block" contenteditable="true">&nbsp</p><button onclick="removeBox(this)">x</button>'
    newTag.className="element_preference";
    var currentList=document.getElementById("tag_list");
    currentList.appendChild(newTag);
  }
}

function checkEmptyBox(){ //This function checks, in the tags created, if the last child is empty (through its inner html)
  var content=document.getElementById("tag_list").lastChild.innerHTML;
  if(content=='<p style="display:inline-block" contenteditable="true">&nbsp;</p><button onclick="removeBox(this)">x</button>'){
    return true;
  }
  return false;
}

function removeBox(selectedElement){ //This method removes the selected tag through the DOM tree.
  selectedElement.parentNode.parentNode.removeChild(selectedElement.parentNode);
}

function popUp() {//This method displays the popup for the first restaurant
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function popUp2() {//This method displays the popup for the second restaurant
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}

function popUp3() {//This method displays the popup for the third restaurant
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}
