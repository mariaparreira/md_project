const urlBase = "http://localhost:8000/api";

// Function to search for product
function searchProd() {
    let prodID = document.getElementById('prodID').value;
}

// Function to logoff
// Only for testing purposes
function logOff() {
    window.location.assign('index.html');
}

// Function to go back to Regist Product Page
function registProdPage() {
    window.location.assign('registProd.html');
}

// Function to go to the QR Code generation page
function qrCodePage() {
    window.location.assign('qrCode.html');
}