var WirebitsToken = artifacts.require("./WirebitsToken.sol");

contract('WirebitsToken', function(accounts) {
  var tokenInstance;

  // This test block is to ensure the token is deployed with the correct  details, if they are wrong the test will fail
  it('initialises the contract with the correct values', function() {
    return WirebitsToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.name();
    }).then(function(name) {
      assert.equal(name, 'Wirebits', 'has the correct name');
      return tokenInstance.symbol();
    }).then(function(symbol) {
      assert.equal(symbol, 'WBITS', 'has the correct symbol');
      return tokenInstance.standard();
    }).then(function(standard) {
      assert.equal(standard, 'Wirebits ERC Token v1.0', 'has the correct standard');
    });
  })

  it('sets the total supply upon deployment, bitches', function(){
    return WirebitsToken.deployed().then(function(instance){
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply){
      assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to a million');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(adminBalance){
      assert.equal(adminBalance.toNumber(), 1000000, 'it allocated the initial supply to the admin account')
    });
  });
});
