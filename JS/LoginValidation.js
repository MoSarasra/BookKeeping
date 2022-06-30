let email = document.forms['form']['email'];
let password= document.forms['form']['password'];
let email_error = document.getElementById('email_error');
let pass_error = document.getElementById('pass_error');

let officialUser= JSON.parse(window.localStorage.getItem('user'));

function validated(){
    if(email.value.length <9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length <6){
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    } 
    let eVal = email.value;
    let pVal = password.value;   
 
    alert(officialUser.some(e => e.email === eVal));
    if (officialUser.some(e => e.email === eVal) && officialUser.some(e => e.password === pVal)) {
        
   
                alert('success');  
                let b = document.querySelector("form");
                b.setAttribute("action", "../src/index.html");
            
        
      }
    
      else{
        alert('wrong email or password');
        location.reload();
    }
    
}



