const mysql = require('mysql2/promise');

//Function to connect to the database
function dbConnect() {
    return new Promise((resolve, reject) => {
        if (!global.connection || global.connection.state == 'disconnected') { //If there's a global connection and the state is disconnected
            mysql
                .createConnection('mysql://root:Mp1Rp2D%@localhost:3306/database') //Switch to the mysql workbench route
                .then((connection) => {
                    global.connection = connection;
                    console.log('New mySQL connection');
                    resolve(connection);
                })
                .catch((error) => {
                    console.log('Error connecting to mySQL:');
                    console.log(error);
                    reject(error.code);
                });
        } else {
            connection = global.connection;
            resolve(connection);
        }
    });
}

//Function queries in the database
function dbQuery(sql, params) {
    return new Promise((resolve, reject) => {
        dbConnect() //Triggered when a query is made
            .then((conn) => {
                conn
                    .execute(sql, params)
                    .then(([result]) => {
                        resolve(result);
                    })
                    .catch((error) => {
                        reject(error.sqlMessage);
                    });
            })
            .catch((error) => {
                console.log('Query:');
                console.log(error);
                reject(error);
            });
    });
}

//Registers new user
exports.dbRegister = (name, password) => {
    //Inserts new user
    return new Promise((resolve, reject) => {
        data = {
            name : name,
            password : password,
        };
        dbQuery(
            'INSERT INTO manufac (name, password) VALUES(?,?)',
            [data.name, data.password]
        )
        .then((result) => {
            console.log('Model: User registered: ');
            console.log(data);
            console.log(result);

            if (result.affectedRows != 1)
                reject('Model: Problem occurred inserting new regist');
            else resolve(result);
        })
        .catch((error) => {
            console.log('Model: Problem with regist:');
            console.log(error);
            reject(error);
        });
    });
};

//Returns the user and the encrypted password
exports.dbLogin = (name) => {
    return new Promise((resolve, reject) => {
        //searches the regists that contain the key
        dbQuery('SELECT name, password FROM manufac WHERE name=?', [name])
            .then((result) => {
                user = {};
                Object.keys(result).forEach(function (key) {
                    user = result[key];
                    console.log(user.name);
                });
                console.log('Model: Login: ');
                console.log(user);

                if (user.name != name) reject('Unknown user');
                else resolve(user);
            })
            .catch((error) => {
                console.log('Model: Problem with login:');
                console.log(error);
                reject(error);
            });
    });
};

// Submit Product to database
exports.dbRegistProd = (manufacN, prodID, prodN, prodLoc, manufacD, expirationD, ogPrice, typeP) => {
    // Inserts new product
    return new Promise((resolve, reject) => {
        data = {
            manufacN : manufacN,
            prodID : prodID,
            prodN : prodN,
            prodLoc : prodLoc,
            manufacD : manufacD,
            expirationD : expirationD,
            ogPrice : ogPrice,
            typeP : typeP,
        };
        dbQuery (
            'INSERT INTO prodsregist (manufacN, prodID, prodN, prodLoc, manufacD, expirationD, ogPrice, typeP) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [data.manufacN, data.prodID, data.prodN, data.prodLoc, data.manufacD, data.expirationD, data.ogPrice, data.typeP]
        )
        .then((result) => {
            console.log('Model: Product registered: ');
            console.log(data);
            console.log(result);

            if (result.affectedRows != 1)
                reject('Model: Problem occurred inserting new product registration');
            else resolve(result);
        })
        .catch((error) => {
            console.log('Model: Problem with product registration: ');
            console.log(error);
            reject(error);
        });
    });
};