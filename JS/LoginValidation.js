

var email = document.forms['form']['email'];
var Password= document.forms['form']['password'];



var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('password_error');


function validated(){
    if(email.value.length <9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
}