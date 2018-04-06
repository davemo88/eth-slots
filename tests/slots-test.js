let {callAssertException} = require('./helpers.js');
let big = require('bignumber.js');

let Slots = artifacts.require("../contracts/Slots.sol");

contract('Slots', function (accounts) {

  let DEPLOYER = accounts[0];
  let ALICE = accounts[1];
  let CAROL = accounts[2];

  it("should only return messages from paid-for messages", async function () {
    // Okay, deploy a contract

    // console.log("ALICE predeploy balance ", await web3.eth.getBalance(ALICE).toString(10));
    let deployed = await Slots.deployed();

    // console.log("Owner ->", await deployed.getOwner.call());
    // console.log("Balance ->", (await deployed.getBalance.call()).toString(10));

    let contractAddress = deployed.contract.address;

    // console.log("ALICE", await web3.eth.getBalance(ALICE).toString(10));
    // console.log("BOB", await web3.eth.getBalance(BOB).toString(10));
    // console.log("CAROL", await web3.eth.getBalance(CAROL).toString(10));
    // console.log("OUR BALANCE #1 =", await web3.eth.getBalance(contractAddress).toString(10));
    // console.log(web3.eth.gasPrice.toString(10));
    // console.log(ALICE, await web3.eth.getBalance(ALICE).toString(10));
    //
    //

    let SPIN_VALUE = web3.toWei(0.1, "ether"); 
    let SPIN_NUMBER = new big.BigNumber(SPIN_VALUE);

    let ALICE_OLD_BALANCE = await web3.eth.getBalance(ALICE);
    ALICE_OLD_BALANCE = web3.fromWei(ALICE_OLD_BALANCE, 'ether');

    let res1 = await deployed.spin({from: ALICE, value: SPIN_VALUE});

    let ALICE_NEW_BALANCE = await web3.eth.getBalance(ALICE);
    ALICE_NEW_BALANCE = web3.fromWei(ALICE_NEW_BALANCE, 'ether');

    SPIN_BIG_NUMBER = web3.fromWei(SPIN_NUMBER, 'ether');

    GAS_USED = res1.receipt.cumulativeGasUsed;
    GAS_PRICE = web3.fromWei(100000000000, 'ether');
    GAS_COST = (GAS_USED * GAS_PRICE).toFixed(8);
//    GAS_COST = new big.BigNumber(GAS_USED * GAS_PRICE);

    console.log("===============================");
    console.log("Alice balance before spin: ", ALICE_OLD_BALANCE.toString(10));
    console.log("Alice balance after spin:  ", ALICE_NEW_BALANCE.toString(10));
    console.log("");
    console.log("Spin Amount: ", SPIN_BIG_NUMBER.toString(10));
    console.log("Gas Cost: ", GAS_COST);

    console.log(
      ALICE_OLD_BALANCE.toString(10),
      "=",
      ALICE_NEW_BALANCE.toString(10),
      "+",
      SPIN_BIG_NUMBER.toString(10),
      "+",
      GAS_COST.toString(10),
      "=",
      ALICE_NEW_BALANCE.plus(SPIN_BIG_NUMBER).plus(GAS_COST).toString(10)
    );

    return;

    console.log(ALICE_NEW_BALANCE.plus(SPIN_VALUE).plus(res1.receipt.gasUsed).toString(10));

  });

});
