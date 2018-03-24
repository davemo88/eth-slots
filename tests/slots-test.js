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

    let res1 = await deployed.spin({from: ALICE, value: SPIN_VALUE});


    ALICE_NEW_BALANCE = await web3.eth.getBalance(ALICE);


    console.log("===============================");
    console.log(ALICE_OLD_BALANCE.minus(ALICE_NEW_BALANCE).toString(10));
    console.log(SPIN_NUMBER.plus(web3.toWei(res1.receipt.cumulativeGasUsed,"shannon")).toString(10));
    return;
    console.log(
      ALICE_OLD_BALANCE.toString(10),
      "=",
      ALICE_NEW_BALANCE.toString(10),
      "+",
      SPIN_VALUE.toString(10),
      "+",
      MISSING.toString(10),
      "=",
    );
    console.log(ALICE_NEW_BALANCE.plus(SPIN_VALUE).plus(res1.receipt.gasUsed).toString(10));


    // ...
    // console.log(await web3.eth.getBalance(ALICE).toString(10));
    // console.log(await web3.eth.getBalance(ALICE).toString(10));
    // console.log(web3.eth.gasPrice.toString(10));
    // console.log("<<<", (await deployed.getBalance.call()).toString(10));
    // console.log("OUR BALANCE #2 =", await web3.eth.getBalance(contractAddress).toString(10));

  });

});
