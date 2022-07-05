let userPlus = [];
function submitFormPlus() {
    const signUpForm = document.getElementById('signupPlus');
    const userName = signUpForm['username'].value;
    const password = signUpForm['password'].value;


    let newUserPlus = {
        userName: userName,
        password: password
    }

    let currentUserPlus = JSON.parse(localStorage.getItem('userPlus')) || [];
    currentUserPlus.push(newUserPlus);

    localStorage.setItem('userPlus', JSON.stringify(currentUserPlus));



    let userAdd = document.getElementById('signupPlus');
    userAdd.setAttribute('action', '../src/userHome.html');
}



function fullUserPlus() {

    let currentUser = JSON.parse(localStorage.getItem('userPlus')) || [];
    let userData1 = ``;

    for (const userInfo of currentUser) {
        userData1 = `${userInfo.userName}`;
        userNameHello = userInfo.userName;
    }
    console.log(userData1);
    document.getElementById('Hello-userq').style.visibility = 'visible';

    const welcomeName = document.getElementById('hello');
    if (welcomeName) {
        welcomeName.innerText = userData1;
    }

}
function showPlus() {
    document.getElementById('Hello-userq').style.visibility = 'visible';
    document.getElementById('dash').style.visibility = 'hidden';
    document.getElementById('divId').style.visibility = 'hidden';

}

function allFunOnClick() {

    submitFormPlus();
    fullUserPlus();
    showPlus();
    document.getElementById('Hello-userq').style.visibility = 'visible';

}

