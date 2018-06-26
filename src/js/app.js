App = {

  web3Provider: null,
  contracts: {},

  init: function(){
    console.log("App initialised")
    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545'); //The port needs to be the same as Ganache
      web3 = new Web3(App.web3Provider);
    }

    return App.initContracts();
  },

  initContracts: function() {
    $.getJSON("WirebitsTokenSale.json", function(wirebitsTokenSale) {
      App.contracts.WirebitsTokenSale = TruffleContract(wirebitsTokenSale);
      App.contracts.WirebitsTokenSale.setProvider(App.web3Provider);
      App.contracts.WirebitsTokenSale.deployed().then(function(wirebitsTokenSale) {
        console.log("Wirebits Token Sale Address:", wirebitsTokenSale.address);
      });
    })
  }
}

$(function() {
  $(window).load(function() {
    App.init();
  })
});
