// for the add user section 
let newEmail = document.forms['form']['new_email'];
let newPassword= document.forms['form']['new_password'];
let email_error2 = document.getElementById('email_error2');
let pass_error2 = document.getElementById('pass_error2');




function addCheck(){
    alert('add user number one');
    if(newEmail.value.length <9){
        newEmail.style.border = "1px solid red";
        email_error2.style.display = "block";
        newEmail.focus();
        return false;
    }
    if(newPassword.value.length <6){
        newPassword.style.border = "1px solid red";
        pass_error2.style.display = "block";
        newPassword.focus();
        return false;
    } 
    let eVal = email.value;
     let newEVal = newEmail.value;
    let newPVal = newPassword.value; 
    alert(newEVal);
    if (info.some(e => e.email === eVal)) {
    e.user1.email.push(newEVal);
    e.user1.email.push(newPVal);
    }


}
