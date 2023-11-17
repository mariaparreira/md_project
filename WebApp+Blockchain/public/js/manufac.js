const urlBase = "https://localhost:8000/api";
const modalLogin = document.getElementById('modalLogin');
const bsModalLogin = new bootstrap.Modal(modalLogin, (backdrop = 'static'));
const modalRegister = document.getElementById('modalRegister');
const bsModalRegister = new bootstrap.Modal(modalRegister, (backdrop = 'static'));

const btnModalLogin = document.getElementById('btnModalLogin');
const btnModalRegister = document.getElementById('btnModalRegister');
const stRegister = document.getElementById('stRegister');

// First you need to register
stRegister.addEventListener('click', () => {
    bsModalLogin.hide();
    callModalRegister();
});

//Call login form
modalLogin.addEventListener('shown.bs.modal', () => {
    document.getElementById('nameLogin').focus();
});
btnModalLogin.addEventListener('click', () => {
    bsModalLogin.show();
});

//Call sign up form
btnModalRegister.addEventListener('click', () => {
    callModalRegister();
});

//Function to call the sign up form
function callModalRegister() {
    document.getElementById('btnSubmitRegister').style.display = 'block';
    document.getElementById('btnCancelRegister').innerHTML = 'Cancel';
    bsModalRegister.show();
}

//Function to validate the user registration
function validateRegister() {
    let name = document.getElementById('nameRegister').value;
    let password = document.getElementById('passRegister').value;
    const statReg = document.getElementById('statusRegister');

    if (password.length < 8) {
        document.getElementById('passErrorRegister').innerHTML =
            'The password has to be at least 8 characters long';
        return;
    }

    fetch(`${urlBase}/register`, {
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        body: `name=${name}&password=${password}`,
    })
    .then((response) => {
        return response.json().then((body) => {
            if (response.status == 201) {
                console.log(body.message);
                statReg.innerHTML = body.message;
                document.getElementById('btnSubmitRegister').style.display = 'none';
                document.getElementById('btnCancelRegister').innerHTML = 'Close';
            } else {
                throw body;
            }
        });
    })
    .catch((body) => {
        result = body.message;
        statReg.innerHTML = `Request failed: ${result}`;
        console.log("Catch:");
        console.log(result);
    });
}

//Function to validate the login
function validateLogin() {
    let name = document.getElementById('nameLogin').value;
    let password = document.getElementById('passLogin').value;
    const statLogin = document.getElementById('statusLogin');

    if (password.length < 8) {
        document.getElementById('passErrorLogin').innerHTML =
            'The password has to be at least 8 characters long';
        return;
    }

    fetch(`${urlBase}/login`, {
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        body: `name=${name}&password=${password}`,
    })
    .then((response) => {
        return response.json().then((body) => {
            if (response.status == 200) { //If the login is successful, go to next page
                console.log(body.user);
                statLogin.innerHTML = "Successful";
                window.location.assign('registProd.html');
                //alert('Login was Successfull');
                //document.getElementById('btnLoginClose').click();
            } else {
                throw body;
            }
        });
    })
    .catch((body) => {
        result = body.message;
        statLogin.innerHTML = `Request failed: ${result}`;
        console.log("Catch:");
        console.log(result);
    });
}