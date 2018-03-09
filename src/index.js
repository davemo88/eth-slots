import {c} from './contract-info.json';

() => {
var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
  web3js = new Web3(web3.currentProvider);
} else {
  throw "I don't care. I don't care. I don't care. I don't care. No one said life was easy."
}

let ACCOUNT = web3.accounts[0];
};

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
