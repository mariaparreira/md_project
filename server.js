const express = require('express');
//const https = require('https');
const fs = require('fs');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/routes.js')(app)

/*const sslServer = https.createServer(
    {
        key: fs.readFileSync('cert/key.pem'),
        cert: fs.readFileSync('cert/certificate.pem'),
    },
    app
);*/

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
});

app.use(express.static('public'));