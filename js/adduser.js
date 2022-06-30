function fullUser() {
    const userPage = document.getElementById('userNameHtml')
    
    let currentUsers = JSON.parse(localStorage.getItem('user')) || [];
    let userData = ``;

    for (const userInfo of currentUsers) {
        userData +=` ${userInfo.userName} `  ;
    }
    console.log(userData);

    // document.getElementById(userPage).innerHTML = userData;
    // document.getElementById('userNameHtml').innerHTML = userData;

}

fullUser();