let Web3 = require('web3');

let web3js;

if (typeof web3 !== 'undefined') {
  web3js = new Web3(web3.currentProvider);
} else {
  throw "I don't care. I don't care. I don't care. I don't care. No one said life was easy."
}

/**
 * Send a spin transaction to the evm
 * @param account {address} account
 * @param amount {uint} amount in eth
 */
function spin(account, amount) {
  console.log("Spinning", account, "for", amount);
}

export {
  spin,
};
