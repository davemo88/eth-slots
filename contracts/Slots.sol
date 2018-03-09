pragma solidity ^0.4.11;

contract Slots {
// pubkey hash
  address owner;
// in smallest unit of eth
  uint balance;

  function mortal() { owner = msg.sender; }

  function kill() { if (msg.sender == owner) selfdestruct(owner); }

// 
 function SlotMachine() public {
   owner = msg.sender;
   balance = msg.value;
 }

 function spin() public payable { 

 }


}
