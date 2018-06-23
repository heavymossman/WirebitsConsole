var WirebitsToken = artifacts.require("./WirebitsToken.sol");

contract('WirebitsToken', function(accounts) {

  it('sets the total supply upon deployment, bitches', function(){
    return WirebitsToken.deployed().then(function(instance){
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply){
      assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to a million')
    });
  });



})
