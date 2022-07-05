let users = [];
function submitForm() {
    const signUpForm = document.getElementById('signup');
    const userName = signUpForm['username'].value;
    const email = signUpForm['email'].value;
    const password = signUpForm['password'].value;
    const BusinessName = signUpForm['BusinessName'].value;
    const country = signUpForm['country'];
    let countryOptions = country.options[country.selectedIndex].value;
    const currency = signUpForm['currency'];
    let currencyOptions = currency.options[currency.selectedIndex].value;
     if(password.length < 6){
        alert('password must be at least 6 chars');
        return false;
     }
    let newUser = {
        userName: userName,
        email: email,
        password: password,
        BusinessName: BusinessName,
        country: countryOptions,
        currency: currencyOptions
    }

    let currentUser = JSON.parse(localStorage.getItem('user')) || [];
    currentUser.push(newUser);

    localStorage.setItem('user', JSON.stringify(currentUser));



    let userAdd = document.getElementById('signup');
    userAdd.setAttribute('action', '../src/userHome.html');

}


