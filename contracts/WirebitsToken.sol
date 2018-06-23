/*
Implements EIP20 token standard: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md
.

With thanks to Dapp University

https://youtu.be/XdKv5uwEk5A

*/


pragma solidity ^0.4.23;

contract WirebitsToken {
  uint256 public totalSupply;

  function WirebitsToken () {
    totalSupply = 1000000;
  }
}
