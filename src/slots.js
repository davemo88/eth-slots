import {accounts, defaultAccount, web3js} from './webs.js';

/**
 * Send a spin transaction to the evm
 * @param account {address} account
 * @param amount {uint} amount in eth
 */
function spin(account, amount) {
  console.log("Spinning", defaultAccount(), "for", amount, "ETH");
}

export {
  spin,
};
