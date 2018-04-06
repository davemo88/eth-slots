import c from './contract-info.json';
import {spin} from './slots.js';

var Web3 = require('web3');


if (typeof Web3 !== 'undefined') {
  var web3js = new Web3(web3.currentProvider);
  // var web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
} else {
  throw "I don't care. I don't care. I don't care. I don't care. No one said life was easy."
}


let ACCOUNTS = [];


window.addEventListener('load', (ev) => {
  if (web3.currentProvider.isMetaMask) {
    // ...
  } else {
    // ...
  }
});


/**
 *
 */
web3.eth.getAccounts((err, accounts) => {
  if (err) {
    console.error("Get accounts failed");
    throw ":(";
  }
  ACCOUNTS = accounts;
});
//*/


/**
 * Send 
 */
function sendSpin() {
  let address = ACCOUNTS[0];
  let amount = web3.toWei('0.01', 'ether');

  if (!address) {
    console.log("No account in metamask :thinking_face:");
  }

  console.log(address, amount);

  spin(address, amount);
}


export {sendSpin};
