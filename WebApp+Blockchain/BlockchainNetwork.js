const Blockchain = require('./blockchain/src/Blockchain.js');
const Transaction = require('./blockchain/src/MasterNode.js');
const Participants = require('./blockchain/src/Participants.js');
const ProofOfStake = require('./blockchain/consensus/ValidatorNode.js');

repeat_lines = 50;

console.log("-".repeat(repeat_lines))
console.log("New Blockchain started with Proof of Stake")
console.log("-".repeat(repeat_lines))
let blockchain = new Blockchain('pos');
console.log("Genesis Block 1 created")
console.log("-".repeat(repeat_lines))

console.log("-".repeat(repeat_lines))
console.log("\nValidators joining the network...");

let proofofstake = new ProofOfStake();
nodes = ProofOfStake.setBalanceForNodes(Participants.nodes());
nodes[0] = proofofstake.createValidator(nodes[0], 200);
nodes[1] = proofofstake.createValidator(nodes[1], 100);
proofofstake.validators.forEach(function(validator){
    console.log(validator[0] + " has a stake of " + validator[1]);
});

// Block 1
console.log("-".repeat(repeat_lines))
console.log('\nFirst Transactions created...\n');
blockchain.createTransaction(new Transaction(Participants.accounts()[0][0], Participants.accounts()[1][0], 'danilson', 1002, 'cheese', 'sintra', '28/03/2023', '28/04/2023', 2.00, 'dairy', 10)); //added transaction
 

// Block 2
console.log("-".repeat(repeat_lines))
console.log('Creating Block 2...');
console.log('\nChoosing validator...');
let validator = proofofstake.getValidatorWithMaxStake()[0];
console.log("Validator with the highest stake chosen: " + validator)

blockchain.generateBlock(validator);
console.log('\nMiner of Block 1 has been rewarded...');

//added transaction
console.log('-'.repeat(repeat_lines));
console.log('\nNew Transactions created...');
blockchain.createTransaction(new Transaction(Participants.accounts()[0][0], Participants.accounts()[1][0], 'ines', 1001, 'chicken', 'sintra', '15/03/2023', '15/04/2023', 16.00, 'meat', 13));


// Block 3
console.log("-".repeat(repeat_lines))
console.log('Creating Block 3...');
console.log('\nChoosing validator...');
validator = proofofstake.getValidatorWithMaxStake()[0];
console.log("Validator with the highest stake chosen: " + validator);

blockchain.generateBlock(validator);
console.log('\nMiner of Block 2 has been rewarded...');

//added transaction
console.log('-'.repeat(repeat_lines));
console.log('\nNew Transactions created...');
blockchain.createTransaction(new Transaction(Participants.accounts()[0][0], Participants.accounts()[1][0], 'joana', 1004, 'salmon', 'oslo', '24/03/2023', '04/04/2023', 11.00, 'fish', 16));


// Block 4
console.log("-".repeat(repeat_lines))
console.log('Creating Block 4...');
console.log('\nChoosing validator...');
validator = proofofstake.getValidatorWithMaxStake()[0];
console.log("Validator with the highest stake chosen: " + validator);

blockchain.generateBlock(validator);
console.log('\nMiner of Block 3 has been rewarded...');

//added transaction
console.log('-'.repeat(repeat_lines));
console.log('\nNew Transactions created...');
blockchain.createTransaction(new Transaction(Participants.accounts()[0][0], Participants.accounts()[1][0], 'miguel', 1003, 'rice', 'coimbra', '02/04/2023', '24/06/2023', 1.50, 'cereal', 200));

// Block 5
console.log("-".repeat(repeat_lines))
console.log('Creating Block 5...');
console.log('\nChoosing validator...');
validator = proofofstake.getValidatorWithMaxStake()[0];
console.log("Validator with the highest stake chosen: " + validator);

blockchain.generateBlock(validator);
console.log('\nMiner of Block 4 has been rewarded...');

//added transaction
console.log('-'.repeat(repeat_lines));
console.log('\nNew Transactions created...');
blockchain.createTransaction(new Transaction(Participants.accounts()[0][0], Participants.accounts()[1][0], 'maria', 1005, 'potatoes', 'hauts-de-france', '10/05/2023', '10/05/2024', 1.67, 'vegetable', 70));

// Block 6
console.log("-".repeat(repeat_lines))
console.log('Creating Block 6...');
console.log('\nChoosing validator...');
validator = proofofstake.getValidatorWithMaxStake()[0];
console.log("Validator with the highest stake chosen: " + validator);

blockchain.generateBlock(validator);
console.log('\nMiner of Block 5 has been rewarded...');

//added transaction
console.log('-'.repeat(repeat_lines));
console.log('\nNew Transactions created...');
blockchain.createTransaction(new Transaction(Participants.accounts()[0][0], Participants.accounts()[1][0], 'maria', 1006, 'eggs', 'florida', '03/05/2023', '03/07/2023', 2.00, 'animal', 300));

// Block 7
console.log("-".repeat(repeat_lines))
console.log('Creating Block 7...');
console.log('\nChoosing validator...');
validator = proofofstake.getValidatorWithMaxStake()[0];
console.log("Validator with the highest stake chosen: " + validator);

blockchain.generateBlock(validator);
console.log('\nMiner of Block 6 has been rewarded...');

//added transaction
console.log('-'.repeat(repeat_lines));
console.log('\nNew Transactions created...');
blockchain.createTransaction(new Transaction(Participants.accounts()[0][0], Participants.accounts()[1][0], 'ricardo', 1007, 'milk', 'glasgow', '10/05/2023', '25/05/2023', 1.20, 'dairy', 135));

// Block 8
console.log("-".repeat(repeat_lines))
console.log('Creating Block 8...');
console.log('\nChoosing validator...');
validator = proofofstake.getValidatorWithMaxStake()[0];
console.log("Validator with the highest stake chosen: " + validator);

blockchain.generateBlock(validator);
console.log('\nMiner of Block 7 has been rewarded...');

//added transaction
console.log('-'.repeat(repeat_lines));
console.log('\nNew Transactions created...');
blockchain.createTransaction(new Transaction(Participants.accounts()[0][0], Participants.accounts()[1][0], 'ricardo', 1008, 'sea bass', 'helsinky', '10/05/2023', '14/05/2023', 45.00, 'fish', 20));

// Block 9
console.log("-".repeat(repeat_lines))
console.log('Creating Block 9...');
console.log('\nChoosing validator...');
validator = proofofstake.getValidatorWithMaxStake()[0];
console.log("Validator with the highest stake chosen: " + validator);

blockchain.generateBlock(validator);
console.log('\nMiner of Block 8 has been rewarded...');

//added transaction
console.log('-'.repeat(repeat_lines));
console.log('\nNew Transactions created...');
blockchain.createTransaction(new Transaction(Participants.accounts()[0][0], Participants.accounts()[1][0], 'ines', 1009, 'oranges', 'algarve', '24/05/2023', '24/06/2023', 3.99, 'fruit', 37));

//Block 10
console.log("-".repeat(repeat_lines))
console.log('Creating Block 10...');
console.log('\nChoosing validator...');
validator = proofofstake.getValidatorWithMaxStake()[0];
console.log("Validator with the highest stake chosen: " + validator);

blockchain.generateBlock(validator);
console.log('\nMiner of Block 9 has been rewarded...');

//add transaction here, by replacing the variables for your product information and uncomment the code
//console.log('-'.repeat(repeat_lines));
//console.log('\nNew Transactions created...');
//blockchain.createTransaction(new Transaction(Participants.accounts()[0][0], Participants.accounts()[1][0], 'manufacN', prodID, 'prodN', 'prodLoc', 'manufacD', 'expirationD', price, 'typeP', amount));

// uncomment block 11 so block 10 will be visible when it is intended to add new transaction, because the prior block will only be validated after
//Block 11
/*console.log("-".repeat(repeat_lines))
console.log('Creating Block 11...');
console.log('\nChoosing validator...');
validator = proofofstake.getValidatorWithMaxStake()[0];
console.log("Validator with the highest stake chosen: " + validator);

blockchain.generateBlock(validator);
console.log('\nMiner of Block 10 has been rewarded...');*/
// Validation check of the blockchain
console.log("\n"+"-".repeat(repeat_lines)+"\n"+"-".repeat(repeat_lines)) 
console.log("Validation check...")
blockchain.validationCheck();

// Print balances
console.log("\n"+"-".repeat(repeat_lines))
Participants.nodes().forEach(function(account){
    console.log('Balance of '+account[0]+':\t'+ blockchain.getBalanceOfAddress(account[0]))
});
Participants.accounts().forEach(function(account){
    console.log('Balance of '+account[0]+':\t'+ blockchain.getBalanceOfAddress(account[0]))
});

// Print blockchain
console.log("\n"+"-".repeat(repeat_lines)+"\n"+"-".repeat(repeat_lines)) 
console.log("Blockchain") 
console.log(JSON.stringify(blockchain.chain,'', 4));
console.log("-".repeat(repeat_lines))

//Print pending transactions
//console.log("Pending transactions") 
//console.log(JSON.stringify(blockchain.pendingTransactions,'', 4));
