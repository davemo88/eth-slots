let Web3 = require('web3');
let web3js;
let ACCOUNTS = [];

if (typeof web3 !== 'undefined') {
  web3js = new Web3(web3.currentProvider);
} else {
  throw "I don't care. I don't care. I don't care. I don't care. No one said life was easy."
}

// Kick-off
web3js.eth.getAccounts((err, accounts) => {
  if (err) {
    console.log(err);
    return;
  }

  ACCOUNTS = accounts;
});


/**
 * Return accounts once loaded
 */
function accounts() {
  return ACCOUNTS;
}

function defaultAccount() {
  return ACCOUNTS[0];
}

export {
  defaultAccount,
  accounts,
  web3js,
};
