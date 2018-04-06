import c from './contract-info.json';
import {accounts, defaultAccount, web3js} from './webs.js';

let Slots = new web3js.eth.Contract(c.abi, c.contractAddress);

let ev = Slots.events.FuckIt();


ev.on("data", (ev) => {
  console.log("Bleep bloop");
}).on("changed", (ev) => {
  console.log("CHANGED!");
}).on("error", (ev) => {
  console.log("Errror!");
});


/**
 * Send a spin transaction to the evm
 * @param account {address} account
 * @param amount {uint} amount in eth
 */
function spin(account, amount) {
  console.log(account, "@", amount);
  let caller = Slots.methods.spin();
  let msg = {
    from: account,
    gas: 3*104305,
    gasLimit: 39*104305,
  };

  caller.send(msg, (err, ok) => {
    if (err) {
      console.error("Fuck no!", err);
      return;
    }

    console.log("Fuck yea!", ok);
  });

  console.log("Spinning", defaultAccount(), "for", amount, "ETH");
}

export {
  spin,
};
