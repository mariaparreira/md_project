const urlBase = "https://localhost:8000/api";

let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

function generateQR() {
    if (qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add('show-img');
    }
}

// Function to logoff
// Only for testing purposes
function logOff() {
    window.location.assign('index.html');
}

// Function to go to page to search for products
function prodSearch() {
    window.location.assign('prodSearch.html');
}

// Function to go back to Regist Product Page
function registProdPage() {
    window.location.assign('registProd.html');
}