import {c} from './contract-info.json';

var Web3 = require('web3');

if (typeof Web3 !== 'undefined') {
  var web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
} else {
  throw "I don't care. I don't care. I don't care. I don't care. No one said life was easy."
}

console.log(web3js);
let ACCOUNT = web3js.eth.accounts;


/**
 * Spin the wheel
 * @param {nothing} nothing
 */
function spin() {
  console.log(ACCOUNT);
}

export {
  spin,
};
