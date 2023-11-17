class Transaction {
    constructor(fromAddress, toAddress, manufacN, prodID, prodN, prodLoc, manufacD, expirationD, price, typeP, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.manufacN = manufacN;
        this.prodID = prodID;
        this.prodN = prodN;
        this.prodLoc = prodLoc;
        this.manufacD = manufacD;
        this.expirationD = expirationD;
        this.price = price;
        this.typeP = typeP;
        this.amount = amount;
    }
}

module.exports = Transaction;