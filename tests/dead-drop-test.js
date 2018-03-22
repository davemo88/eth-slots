let {callAssertException} = require('./helpers.js');

let Slots = artifacts.require("Slots.sol");

contract('Slots', function (accounts) {

  let MINER = accounts[0];

  let ALICE = accounts[1];
  let BOB = accounts[2];
  let CAROL = accounts[3];

  it("should only return messages from paid-for messages", async function () {
    let deployed = await Slots.deployed();


    console.log(web3.eth.gasPrice.toString(10));
    console.log(ALICE, await web3.eth.getBalance(ALICE).toString(10));
    let res1 = await deployed.spin({from: ALICE, value: 1e8})
    console.log(await web3.eth.getBalance(ALICE).toString(10));
    console.log(web3.eth.gasPrice.toString(10));


    // spin()
    // mine
    // check results - see balance is different

    let res2 = await deployed.spin({from: ALICE, value: 1e8});

    console.log(res1)
    return;


    // OP buys box 6 and 7 and puts messages in them
    await deployed.drop(6, "kda player lol", 1e8, 2*24*60*60, {from: accounts[0]});
    await deployed.drop(7, "trevelyn is op keke", 1e8, 2*24*60*60, {from: accounts[0]});

    // Alice pays for box 6
    await deployed.payfor(6, {from: ALICE, value: 1e8});

    // Bob tries to pay for box 6
    callAssertException(deployed, deployed.payfor.call, [6], {from: BOB, value: 1e8}, "revert");

    // Bob pays for box 7
    await deployed.payfor(7, {from: BOB, value: 1e8});

    // Bob fails at picking up box 6
    callAssertException(deployed, deployed.pickup.call, [6], {from: BOB}, "revert");

    // Alice correctly get what that she purchased
    assert.equal(
      "kda player lol",
      await deployed.pickup.call(6, {from: ALICE}),
    );

    // Bob correctlys gets the message that he purchased
    assert.equal(
      "trevelyn is op keke",
      await deployed.pickup.call(7, {from: BOB}),
    );
  });

  it("should reject pickups that are unpaid for", async function () {
    return;
    let BOX_ID = 70;
    let deployed = await DeadDrop.deployed();
    await deployed.drop.call(BOX_ID, "secret message", 1e9, 2*24*60*60, {from: ALICE});
    callAssertException(deployed, deployed.pickup.call, [BOX_ID], {from: ALICE}, "revert");
  });
});
