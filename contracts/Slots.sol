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


  //8constant uint GAMBLE_SIZE = 1e8 wei;

  function mortal() { owner = msg.sender; }

  function kill() { if (msg.sender == owner) selfdestruct(owner); }

  // Craete contract
  function Slots() public payable {
    owner = msg.sender;
    balance = msg.value;
  }

  function getOwner() public returns (address) {
    return owner;
  }

  function getBalance() public returns (uint) {
    return balance;
  }

  uint counter;

  event SpinResult(uint id, address from, bytes32 what, uint value);

  function spin() public payable {

  }

  function spin2() public payable { 

    // ...
    counter = 0;

    // ...
    update_balance_wager();

    // ...
    bytes32 spin_data_hash = keccak256(msg.data);

    uint payout = get_payout(spin_data_hash);

    // We can't 
    // msg.sender.transfer(payout);
// how to make sure transfer succeeds?
    update_balance_payout(1000000000);

    // Lezgo
    counter += 1;

    // Update events log
    SpinResult(counter, msg.sender, spin_data_hash, payout);
  }

  function update_balance_wager() internal {
    require(msg.value > 0);
    balance = balance + msg.value;
  }

  function update_balance_payout(uint payout) internal {
    // ...
    // require(balance >= payout);
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

  // TODO: Make this make money
  function get_payout(bytes32 spin_data_hash) internal returns (uint payout) {
//    return PAYOUTS[distance]
    payout = compute_hamming(spin_data_hash);
    return payout;
  }

}
