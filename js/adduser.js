function fullUser() {

    let currentUsers = JSON.parse(localStorage.getItem('user')) || [];
    let userData = ``;

    for (const userInfo of currentUsers) {
        userData = `Welcome   ${userInfo.userName}` ;
        userNameHello = userInfo.userName;
    }
    console.log(userData);

    const welcomeName = document.getElementById('name');
    if(welcomeName){
        welcomeName.innerText = userData;
    }



    const wName = document.getElementById('username');
    if(wName){
        wName.innerText = userNameHello ;
    }
    
    // document.getElementById(userPage).innerHTML = userData;
    // document.getElementById('userNameHtml').innerHTML = userData;

}

fullUser();

function showdiv() {
    document.getElementById('dash').style.visibility = 'hidden';
    document.getElementById('divId').style.visibility = 'visible';
}

function showdashdiv(){
    document.getElementById('divId').style.visibility = 'hidden';
    document.getElementById('dash').style.visibility = 'visible';
}

