

function authenication(){
  var uname = document.forms["myforms"]["username"].value;
  var pass = document.forms["myforms"]["password"].value;
  if(uname=="admin" && pass=="1234")
  {
    window.location.href="SignUp.html";
  }
  else{
    alert("invalid");
  }
}

