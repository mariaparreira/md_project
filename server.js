const express = require('express');
const fs = require('fs');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/routes.js')(app)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
});

app.use(express.static('public'));