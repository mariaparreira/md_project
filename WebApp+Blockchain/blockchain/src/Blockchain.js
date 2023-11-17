// Needed files
const Block = require('./Block.js');
const Transaction = require('./MasterNode.js');
const ProofOfStake = require('../consensus/ValidatorNode.js');

class Blockchain {
    constructor(consensus) {
        this.consensus = consensus;
        this.chain = [this.createGenesisBlock()];
        this.pendingTransactions = [];
        this.participants = [];
        this.miningReward = 100;
    }

    createGenesisBlock() {
        return new Block("02/04/2023", "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    generateBlock(minerAddress) {
        let block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);

        if (this.consensus == 'pos') {
            let algorithm = new ProofOfStake(block);
            block.validator = minerAddress;
            block = algorithm.generateBlock();
            block.block = this.chain.length;
            this.chain.push(block);
            this.pendingTransactions = [
                new Transaction(null, minerAddress, this.miningReward)
            ]
        }
    }

    createTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    registerParticipant(account) {
        this.participants.push(account);
    }

    getBalanceOfAddress(address) {
        let balance = 0;

        for (const block of this.chain) {
            for (const trans of block.transactions) {
                if (trans.fromAddress === address) {
                    balance += trans.amount * trans.price;
                }

                if (trans.toAddress === address) {
                    balance -= trans.amount * trans.price;
                }
            }
        }

        return balance;
    }

    validationCheck() {
        let consensusAlgorithm = null;
        let validChain = true;

        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i - 1];
            const copiedBlock = Object.assign({}, currentBlock);

            switch(this.consensus) {
                default: case 'pos':
                    consensusAlgorithm = new ProofOfStake(copiedBlock);
                    break;
            }

            if (currentBlock.hash !== consensusAlgorithm.calculateHash()) {
                console.log('Block ' + currentBlock.block + ' is invalid!');
                validChain = false;
            }

            if (currentBlock.prevHash !== prevBlock.hash) {
                console.log('Block ' + currentBlock.block + ' is invalid!');
                validChain = false;
            }
        }

        if (validChain) {
            console.log('Blockchain is valid.');
        }
    }
}

module.exports = Blockchain;