module.exports = app => {

    var router  = require('express').Router();
    const controller = require('../controllers/controller');

    router.post('/register', controller.registerNewUser); // Route for registering new user
    router.post('/login', controller.loginUser); // Route for login
    router.post('/submitProd', controller.submitProd); // Route to submit the product

    app.use('/api', router);
}