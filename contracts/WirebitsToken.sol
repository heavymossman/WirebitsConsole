/*
Implements EIP20 token standard: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md
.

With thanks to Dapp University

https://youtu.be/XdKv5uwEk5A

*/


pragma solidity ^0.4.23;

contract WirebitsToken {

  string  public name = "Wirebits";
  string  public symbol = "WBITS";
  string  public standard = "Wirebits ERC Token v1.0";

  //setting our global function
  uint256 public totalSupply;

  event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

  //maps address integar of where the balance of any set of tokens are
  mapping(address => uint256) public balanceOf;

  function WirebitsToken (uint256 _initialSupply) public {
    balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;
  }

  function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value); //solhint-disable-line indent, no-unused-vars
        return true;
    }
}
