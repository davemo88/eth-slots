import c from './contract-info.json';
import {spin} from './slots.js';

var Web3 = require('web3');

if (typeof Web3 !== 'undefined') {
  var web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
} else {
  throw "I don't care. I don't care. I don't care. I don't care. No one said life was easy."
}

console.log(web3js);
let ACCOUNTS = web3js.eth.accounts;


console.log("<<<!");
web3.eth.getAccounts((err, accounts) => {
  console.log("!!!!!");
  if (err) {
    console.error("Get accounts failed");
    throw ":(";
  }
  console.log("Succeeded");
  console.log(">>>>", accounts);
  ACCOUNTS = accounts;
});

console.log(">>>!");

function sendSpin() {
  console.log("!!!");
  let address = ACCOUNTS[0];
  let amount = 0.1;

  spin(address, amount);
}


export {sendSpin};
/**
 * Spin the wheel
 * @param {nothing} nothing
 */
