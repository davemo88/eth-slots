pragma solidity ^0.4.11;

contract Slots {
// owner pubkey
  address private owner;

// owner pubkey hash
  bytes32 private pubkey_hash;

// in wei 
  uint private balance;

// payouts
  uint[] private PAYOUTS;

  function mortal() { owner = msg.sender; }

  function kill() { if (msg.sender == owner) selfdestruct(owner); }

// 
  function SlotMachine() public {
    owner = msg.sender;
    balance = msg.value;
  }

  function spin() public payable { 
    update_balance_wager();
    bytes32 spin_data_hash = keccak256(msg.data);
    uint distance = compute_hamming(spin_data_hash);
    uint payout = get_payout(distance);
    msg.sender.transfer(payout);
// how to make sure transfer succeeds?
    update_balance_payout(payout);
  }

  function update_balance_wager() internal {
    require(msg.value > 0);
    balance = balance + msg.value;
  }

  function update_balance_payout(uint payout) internal {
    require(balance >= payout);
// should we do this?
    if (balance < payout) {
      payout = balance;
    }
    balance = balance - payout;
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
