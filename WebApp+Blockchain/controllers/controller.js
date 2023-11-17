require('dotenv').config();

const db = require('../models/mysql');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
//const { json } = require('express');

//Function for token authentication
function authenticateToken(req, res) {
    console.log('Authorizing...');
    const cookies = req.cookies;
    console.log('Cookies:');
    console.log(cookies);
    const token = cookies.jwt;

    if (token == null) {
        console.log('Null Token');
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.name = user;
    });
}

//Register new user
exports.registerNewUser = async (req, res) => {
    console.log('Register new user');

    if (!req.body) {
        return res.status(400).send({
            message: 'The content cannot be empty',
        });
    }
    const auth = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(auth.password, salt);
    const name = req.body.name;
    const password = hashPassword;
    db.dbRegister(name, password) //Create
        .then((data) => {
            res.status(201).send({
                message: 'User created successfully',
            });
            console.log('Controller - User registered: ');
            console.log(JSON.stringify(data));
        })
        .catch((response) => {
            console.log('Controller - occurred a problem in the registration:');
            console.log(response);
            return res.status(400).send({
                message: JSON.stringify(response),
            });
        });
}

//Authenticate new user
exports.loginUser = async (req, res) => {
    console.log('User authentication');

    if (!req.body) {
        return res.status(400).send({
            message: 'The content cannot be empty',
        });
    }
    const auth = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(auth.password, salt);
    const name = auth.name;
    const password = hashPassword;
    db.dbLogin(name)
        .then(async (data) => {
            if (await bcrypt.compare(auth.password, data.password)) {
                const user = { name : name};
                const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: 100 * 60,
                });
                res.cookie('jwt', accessToken, {
                    maxAge: 1000 * 60 * 2,
                    httpOnly: true,
                });
                res.status(200).send({ user: name});
                console.log('Response from the database consultation: ');
                console.log(JSON.stringify(data));
            } else {
                console.log('Wrong password');
                return res.status(401).send({ error : 'The password is wrong' })
            }
        })
        .catch((response) => {
            console.log('Controller:');
            console.log(response);
            return res.status(401).send({
                message: JSON.stringify(response),
            });
        });
}

// Submit Product to the database
exports.submitProd = async (req, res) => {
    console.log('Register new product');

    if (!req.body) {
        return res.status(400).send({
            message: 'The content cannot be empty',
        });
    }

    const manufacN = req.body.manufacN;
    const prodID = req.body.prodID;
    const prodN = req.body.prodN;
    const prodLoc = req.body.prodLoc;
    const manufacD = req.body.manufacD;
    const expirationD = req.body.expirationD;
    const ogPrice = req.body.ogPrice;
    const typeP = req.body.typeP;

    db.dbRegistProd(manufacN, prodID, prodN, prodLoc, manufacD, expirationD, ogPrice, typeP) //Create
        .then((data) => {
            res.status(201).send({
                message: 'Product registered succesfully',
            });
            console.log('Controller - Product registered: ');
            console.log(JSON.stringify(data));
        })
        .catch((response) => {
            console.log('Controller - occurred a problem in the product registration:');
            console.log(response);
            return res.status(400).send({
                message: JSON.stringify(response),
            });
        });
}