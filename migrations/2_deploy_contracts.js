var fs = require('fs');
var path = require('path');

var DeadDrop = artifacts.require("./Slots.sol");

module.exports = function(deployer) {
  deployer.deploy(DeadDrop).then((err, res) => {

    DeadDrop.deployed().then(x => {

      let configData = JSON.stringify({
        contractAddress: x.address,
        abi: x.abi,
      });

      let file= path.join(__dirname, '..', 'src', 'contract-info.json');

      fs.writeFileSync(file, configData);

    }).catch(err => {
      console.log(err)
    });
  });

  // fs.writeFileSync(JSN'here', 'whatever');
};
