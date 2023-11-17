// Needed packages
const SHA256 = require('crypto-js/sha256'); // Used for the hashing

class Block {
    constructor(timestamp, transactions, prevHash = '') {
        this.block = 0;
        this.prevHash = prevHash;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.hash = this.calculateHash();
    }

    // Method to calculate hash for genesis block
    calculateHash() {
        return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.transactions)).toString();
    }
}

module.exports = Block;