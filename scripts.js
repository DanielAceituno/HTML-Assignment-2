var logged=false;


function changeToLO(){
    document.getElementById("sl").style.display="block";
    document.getElementById("sr0").style.display="none";
    document.getElementById("sr1").style.display="none";
    document.getElementById("sr2").style.display="block";
    document.getElementById("logReg").style.display="none";
    document.getElementById("register").style.display="none";
    document.getElementById("loginSite").style.display="none";
    document.getElementById("sectionEx3").style.display="none";
    document.getElementById("logout").style.display="none";
    document.getElementById("registerTop").style.display="none";
    document.getElementById("login").style.display="none";
}

function changeToPI(){
    document.getElementById("sl").style.display="block";
    document.getElementById("sr0").style.display="none";
    document.getElementById("sr1").style.display="block";
    document.getElementById("sr2").style.display="none";
    document.getElementById("logReg").style.display="none";
    document.getElementById("register").style.display="none";
    document.getElementById("loginSite").style.display="none";
    document.getElementById("sectionEx3").style.display="none";
    document.getElementById("logout").style.display="none";
    document.getElementById("registerTop").style.display="none";
    document.getElementById("login").style.display="none";
}

function changeToHome(){
    if(!logged){
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
      document.getElementById("sectionEx3").style.display="none";
      document.getElementById("logout").style.display="inline-block";
      document.getElementById("registerTop").style.display="none";
      document.getElementById("login").style.display="none";
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
    document.getElementById("sectionEx3").style.display="none";
    document.getElementById("logout").style.display="none";
    document.getElementById("registerTop").style.display="inline-block";
    document.getElementById("login").style.display="inline-block";
}

function changeToRegister(){
  document.getElementById("sl").style.display="none";
  document.getElementById("sr0").style.display="none";
  document.getElementById("sr1").style.display="none";
  document.getElementById("sr2").style.display="none";
  document.getElementById("logReg").style.display="none";
  document.getElementById("register").style.display="block";
  document.getElementById("loginSite").style.display="none";
  document.getElementById("sectionEx3").style.display="none";
  document.getElementById("logout").style.display="none";
  document.getElementById("registerTop").style.display="inline-block";
  document.getElementById("login").style.display="inline-block";
}

function changeToLogin(){
  document.getElementById("sl").style.display="none";
  document.getElementById("sr0").style.display="none";
  document.getElementById("sr1").style.display="none";
  document.getElementById("sr2").style.display="none";
  document.getElementById("logReg").style.display="none";
  document.getElementById("register").style.display="none";
  document.getElementById("loginSite").style.display="block";
  document.getElementById("sectionEx3").style.display="none";
  document.getElementById("logout").style.display="none";
  document.getElementById("registerTop").style.display="inline-block";
  document.getElementById("login").style.display="inline-block";
}

function changeToPosts(){
    document.getElementById("sl").style.display="none";
    document.getElementById("sr0").style.display="none";
    document.getElementById("sr1").style.display="none";
    document.getElementById("sr2").style.display="none";
    document.getElementById("logReg").style.display="none";
    document.getElementById("register").style.display="none";
    document.getElementById("loginSite").style.display="none";
    document.getElementById("sectionEx3").style.display="block";
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
     setCookie("username", document.getElementById("user").value, 360);
     setCookie("password", document.getElementById("pass").value, 360);
     setCookie("name", document.getElementById("name").value, 360);
     setCookie("surname", document.getElementById("surname").value, 360);
     setCookie("email", document.getElementById("email").value, 360);
     setCookie("birth", document.getElementById("birth").value, 360);
     setCookie("address", document.getElementById("address").value, 360);
     if(document.getElementById("image").value!=""){
       setCookie("image", document.getElementById("image").value, 360);
       document.getElementById("ProfileImage").scr=getCookie("image");
     }
     document.getElementById("HeaderUsername").innerHTML= getCookie("name") + " " + getCookie("surname");
     document.getElementById("login").style.display="none";
     document.getElementById("logout").style.display="inline-block";

     document.getElementById("name2").placeholder= "Actual name: "+getCookie("name");
     document.getElementById("surname2").placeholder= "Actual surname: "+getCookie("surname");
     document.getElementById("email2").placeholder= "Actual email: "+getCookie("email");
     document.getElementById("address2").placeholder= "Actual address: "+getCookie("address");
     document.getElementById("birth2").value= getCookie("birth");
     document.getElementById("phone").placeholder= "Phone number";
     logged=true;
     changeToHome();
     alert("You have registered and logged in correctly!");


}

function logout(){
  document.getElementById("logout").style.display="none";
  document.getElementById("login").style.display="inline-block";
  changeToLogReg();
  logged=false;
  alert("You logged out correctly");
}


function checkLoginCookie(){
  if(document.getElementById("emaillogin").value == getCookie("email")){
    if(document.getElementById("passlogin").value == getCookie("password")){
      document.getElementById("HeaderUsername").innerHTML= getCookie("name") + " " + getCookie("surname");
      document.getElementById("login").style.display="none";
      document.getElementById("logout").style.display="inline-block";
      logged=true;
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

  document.getElementById("name2").placeholder= "Actual name: "+getCookie("name");
  document.getElementById("surname2").placeholder= "Actual surname: "+getCookie("surname");
  document.getElementById("email2").placeholder= "Actual email: "+getCookie("email");
  document.getElementById("address2").placeholder= "Actual address: "+getCookie("address");
  document.getElementById("birth2").value= getCookie("birth");
  document.getElementById("phone").placeholder= "Phone number";
}

function ChangeCookies(){

  if(document.getElementById("name2").value!=""){
    setCookie("name", document.getElementById("name2").value, 360);
    document.getElementById("HeaderUsername").innerHTML= getCookie("name") + " " + getCookie("surname");
  }
  else{
    alert("Your name will not be modified");
  }
  if(document.getElementById("surname2").value!=""){
    setCookie("surname", document.getElementById("surname2").value, 360);
    document.getElementById("HeaderUsername").innerHTML= getCookie("name") + " " + getCookie("surname");
  }
  else{
    alert("Your surname will not be modified");
  }
  if(document.getElementById("email2").value!=""){
    setCookie("email", document.getElementById("email2").value, 360);
  }
  else{
    alert("Your email will not be modified");
  }
  if(document.getElementById("address2").value!=""){
    setCookie("address", document.getElementById("address2").value, 360);
  }
  else{
    alert("Your address will not be modified");
  }
  if(document.getElementById("phone").value!=""){
    setCookie("phone", document.getElementById("phone").value, 360);
  }
  else{
    alert("Your phone number will not be modified");
  }
  if(document.getElementById("birth2").value!=""){
    setCookie("birth", document.getElementById("birth2").value, 360);
  }
  else{
    alert("Your birthdate will not be modified");
  }
  alert("information successfully changed");
}
