let {callAssertException} = require('./helpers.js');

let Slots = artifacts.require("../contracts/Slots.sol");

contract('Slots', function (accounts) {

  let MINER = accounts[0];

  let ALICE = accounts[1];
  let BOB = accounts[2];
  let CAROL = accounts[3];

  it("should only return messages from paid-for messages", async function () {
    // Okay, deploy a contract
    let deployed = await Slots.deployed({from: CAROL, value: 1e7});

    console.log("Owner ->", web3.eth.getOwner.call());
    console.log("Balance ->", web3.eth.getBalance.call());


    let contractAddress = deployed.contract.address;

    console.log("ALICE", await web3.eth.getBalance(ALICE).toString(10));
    console.log("BOB", await web3.eth.getBalance(BOB).toString(10));
    console.log("CAROL", await web3.eth.getBalance(CAROL).toString(10));
    console.log("OUR BALANCE #1 =", await web3.eth.getBalance(contractAddress).toString(10));

    // console.log(web3.eth.gasPrice.toString(10));
    // console.log(ALICE, await web3.eth.getBalance(ALICE).toString(10));
    let res1 = await deployed.spin({from: ALICE, value: 1e8})
    // console.log(await web3.eth.getBalance(ALICE).toString(10));
    // console.log(await web3.eth.getBalance(ALICE).toString(10));
    // console.log(web3.eth.gasPrice.toString(10));
    // console.log("<<<", (await deployed.getBalance.call()).toString(10));




    console.log("OUR BALANCE #2 =", await web3.eth.getBalance(contractAddress).toString(10));

    // spin()
    // mine
    // check results - see balance is different

    let res2 = await deployed.spin({from: ALICE, value: 1e8});

    console.log(res1)
    return;

  });

});
