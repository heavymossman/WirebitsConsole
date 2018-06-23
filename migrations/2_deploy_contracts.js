var WirebitsToken = artifacts.require("./WirebitsToken.sol");

module.exports = function(deployer) {
  deployer.deploy(WirebitsToken, 1000000);

};
