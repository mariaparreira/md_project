const urlBase = "http://localhost:8000/api";


// Function to Submit Product to a database
function submitProduct() {
    let manufacN = document.getElementById('manufacN').value;
    let prodID = document.getElementById('prodID').value;
    let prodN = document.getElementById('prodN').value;
    let prodLoc = document.getElementById('prodLoc').value;
    let manufacD = document.getElementById('manufacD').value;
    let expirationD = document.getElementById('expirationD').value;
    let ogPrice = document.getElementById('ogPrice').value;
    let typeP = document.getElementById('typeP').value;

    const statProd = document.getElementById('statusProd');

    fetch(`${urlBase}/submitProd`, {
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        body: `manufacN=${manufacN}&prodID=${prodID}&prodN=${prodN}&prodLoc=${prodLoc}&manufacD=${manufacD}&expirationD=${expirationD}&ogPrice=${ogPrice}&typeP=${typeP}`,
    })
    .then((response) => {
        return response.json().then((body) => {
            if (response.status == 201) { //If the login is successful, message: 'Product registered succesfully'
                console.log(body.message);
                statProd.innerHTML = body.message;
            } else {
                throw body;
            }
        });
    })
    .catch((body) => {
        result = body.message;
        statProd.innerHTML = `Request failed: ${result}`;
        console.log("Catch:");
        console.log(result);
    });
}

// Submit Product to the master node (DON'T KNOW IF THIS IS RIGHT OR NOT)
/*document.getElementById('submitProd').addEventListener('click', () => {
    var prod = document.getElementsByClassName('sizing');

    for (i = 0; i < prod.length; i++) {
        if (prod[i].checked) {
            let prodJSON = {
                prod: prod[i].value,
            };

            let prodToSend = JSON.stringify(prodJSON);
            fetch('/submitProd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: prodToSend,
            }).then((response) => {
                if (response.status == 200) {
                    window.location.reload();
                }
            });
        }
    }
});*/

// Function to logoff
// Only for testing purposes
function logOff() {
    window.location.assign('index.html');
}

// Function to go to page to search for products
function prodSearch() {
    window.location.assign('prodSearch.html');
}

// Function to go to the QR Code generation page
function qrCodePage() {
    window.location.assign('qrCode.html');
}