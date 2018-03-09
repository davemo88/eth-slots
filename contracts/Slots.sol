pragma solidity ^0.4.11;

contract Slots {
// owner pubkey
  address private owner;

// owner pubkey hash
  bytes32 private pubkey_hash;

// in wei 
  uint private balance;

// payouts
  int[] private PAYOUTS;

  function mortal() { owner = msg.sender; }

  function kill() { if (msg.sender == owner) selfdestruct(owner); }

// 
  function SlotMachine() public {
    owner = msg.sender;
    balance = msg.value;
  }

  function spin() public payable returns (uint payout) { 
    update_balance();
    bytes32 spin_data_hash = keccak256(msg.data);
    uint distance = compute_hamming(spin_data_hash);
    payout = get_payout(distance);
    msg.sender.transfer(payout);
  }

  function update_balance() internal {
    require (msg.value > 0);
    balance = balance + msg.value;
  }

  function compute_hamming(bytes32 spin_data_hash) internal returns (uint distance) {
    distance = 0;
    for (uint i=0; i<32; i++) {
      if (spin_data_hash[i] != pubkey_hash[i]) { distance++; }
    }
    return distance;
  }

  function get_payout(uint distance) internal returns (uint payout) {
//    return PAYOUTS[distance]
    payout = distance;
    return payout;
  }




}
