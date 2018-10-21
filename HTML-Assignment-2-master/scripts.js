var logged=false;


function changeToLO(){
    document.getElementById("sl").style.display="block";
    document.getElementById("sr0").style.display="none";
    document.getElementById("sr1").style.display="none";
    document.getElementById("sr2").style.display="block";
    document.getElementById("logReg").style.display="none";
    document.getElementById("register").style.display="none";
    document.getElementById("loginSite").style.display="none";
}

function changeToPI(){
    document.getElementById("sl").style.display="block";
    document.getElementById("sr0").style.display="none";
    document.getElementById("sr1").style.display="block";
    document.getElementById("sr2").style.display="none";
    document.getElementById("logReg").style.display="none";
    document.getElementById("register").style.display="none";
    document.getElementById("loginSite").style.display="none";
}

function changeToHome(){
    if(!this.logged){
      alert("You must login first");
      return;
    }
    else{
      document.getElementById("sl").style.display="block";
      document.getElementById("sr0").style.display="block";
      document.getElementById("sr1").style.display="none";
      document.getElementById("sr2").style.display="none";
      document.getElementById("logReg").style.display="none";
      document.getElementById("register").style.display="none";
      document.getElementById("loginSite").style.display="none";
    }
}

function changeToLogReg(){
    document.getElementById("sl").style.display="none";
    document.getElementById("sr0").style.display="none";
    document.getElementById("sr1").style.display="none";
    document.getElementById("sr2").style.display="none";
    document.getElementById("logReg").style.display="block";
    document.getElementById("register").style.display="none";
    document.getElementById("loginSite").style.display="none";
}

function changeToRegister(){
  document.getElementById("sl").style.display="none";
  document.getElementById("sr0").style.display="none";
  document.getElementById("sr1").style.display="none";
  document.getElementById("sr2").style.display="none";
  document.getElementById("logReg").style.display="none";
  document.getElementById("register").style.display="block";
  document.getElementById("loginSite").style.display="none";
}

function changeToLogin(){
  document.getElementById("sl").style.display="none";
  document.getElementById("sr0").style.display="none";
  document.getElementById("sr1").style.display="none";
  document.getElementById("sr2").style.display="none";
  document.getElementById("logReg").style.display="none";
  document.getElementById("register").style.display="none";
  document.getElementById("loginSite").style.display="block";
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


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=C:\Users\ARGUI\Desktop\HTML-Assignment-2-master\Cookies";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
     //If none of the required fields are empty go back to home
     if(document.getElementById("user").value == getCookie("username")){
       alert("username in use");
       return;
     }
     if(document.getElementById("email").value == getCookie("email")){
       alert("email in use");
       return;
     }
     setCookie("username", document.getElementById("user").value, 30);
     setCookie("password", document.getElementById("pass").value, 30);
     setCookie("name", document.getElementById("name").value, 30);
     setCookie("surname", document.getElementById("surname").value, 30);
     setCookie("email", document.getElementById("email").value, 30);
     setCookie("birth", document.getElementById("birth").value, 30);
     setCookie("address", document.getElementById("address").value, 30);
     if(document.getElementById("image").value!=""){
       setCookie("image", document.getElementById("image").value, 30);
     }
     document.getElementById("HeaderUsername").innerHTML= getCookie("name") + " " + getCookie("surname");
     document.getElementById("login").style.display="none";
     document.getElementById("logout").style.display="inline-block";
     this.logged=true;
     changeToHome();
     alert("You have registered and logged in correctly!");


}

function logout(){
  document.getElementById("logout").style.display="none";
  document.getElementById("login").style.display="inline-block";
  changeToLogReg();
  this.logged=false;
  alert("You logged out correctly");
}


function checkLoginCookie(){
  if(document.getElementById("emaillogin").value == getCookie("email")){
    if(document.getElementById("passlogin").value == getCookie("password")){
      document.getElementById("HeaderUsername").innerHTML= getCookie("name") + " " + getCookie("surname");
      document.getElementById("login").style.display="none";
      document.getElementById("logout").style.display="inline-block";
      this.logged=true;
      changeToHome();
      alert("You have logged in correctly!");
    }
    else{
      alert("Incorrect password");
    }
  }
  else{
    alert("The specified email is not registered");
  }
}
