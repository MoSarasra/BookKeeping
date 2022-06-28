

var email = document.forms['form']['email'];
var password= document.forms['form']['password'];
var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

var info = [{
    
    "ID": 1,
    "companyName" : "hyperText",
    "email": "hyperText@gmail.com",
    "password": "123MM*",
    "country" : "palestine",
    "currency" : "dollar"
     
},
{
"ID": 2,
"companyName" : "hyperText2",
"email": "hyperText2@gmail.com",
"password": "123MM*2",
"country" : "palestine",
"currency" : "dollar"
}


];

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
    // alert(info.some(e => e.email === eVal));
    if (info.some(e => e.email === eVal)) {
        // alert(info.indexOf(eVal));
        // let i = info[info.indexOf(eVal)].email;
        // let b = info[info.indexOf(eVal)].password;
        // if(i == eVal && b == pVal){
        //     alert('success');
        // }else{
        //     alert("fail");
        // }
        for(let i =0; i<info.length; i++){
            if(info[i].email == eVal && info[i].password != pVal){
                alert('wrong password or email');   
            }
            if(info[i].email == eVal && info[i].password == pVal){
                 alert('success');
            }
        }
      }
      else{
        alert('fail');
    }
    
}
