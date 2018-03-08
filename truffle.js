module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 6721975,
    }
  },
  ropsten:  {
    network_id: 3,
    host: "localhost",
    port:  8545,
    gas:   2900000,
  },
};
