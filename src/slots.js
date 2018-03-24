import c from './contract-info.json';
import {accounts, defaultAccount, web3js} from './webs.js';

let Slots = new web3js.eth.Contract(c.abi, c.contractAddress);
/**
 * Send a spin transaction to the evm
 * @param account {address} account
 * @param amount {uint} amount in eth
 */
function spin(account, amount) {
  let caller = Slots.methods.spin();
  let msg = {
    from: account,
    gas: 3*104305,
    gasLimit: 39*104305,
  };

  caller.send(msg, (err, ok) => {
    if (err) {
      console.log(account, amount);
      console.error("Fuck no!", err);
    }

    console.log("Fuck yea!", ok);
  });

  console.log("Spinning", defaultAccount(), "for", amount, "ETH");
}

export {
  spin,
};
