
let email = document.forms["form"]["email"];
let password = document.forms["form"]["password"];

let officialUser = JSON.parse(window.localStorage.getItem("user"));
function validated() {

  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    email.focus();
    alert('email must be at least 9 chars');
    return false;
  }
  if (password.value.length < 6) {
    password.style.border = "1px solid red";
    password.focus();
    alert('pass must be at least 6 chars');
    return false;
  }
  let eVal = email.value;
  let pVal = password.value;


  if (
    officialUser.some((e) => e.email === eVal && e.password === pVal)
  ) {
    alert("success");
    let b = document.querySelector("form");
    b.setAttribute("action", "../src/userHome.html");
 
    
  } else {
    alert("wrong email or password");
    location.reload();
  }
}