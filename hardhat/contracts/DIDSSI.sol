// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract DIDSSI {
    address public owner;
    using Counters for Counters.Counter;
    Counters.Counter public didIds;
    mapping(string => address) public digitalIdentities;
    mapping(address => bool) public registered;
    mapping(address => string) public emails;
    mapping(address => bool) public verified;
    constructor() {
        owner = msg.sender;
    }
    function register(string memory _name) public {
        require(registered[msg.sender] == false, 'already reegistered');
        digitalIdentities[_name] = msg.sender;
        registered[msg.sender] = true;
        didIds.increment();
    }
    function validateEmail(string memory _email) public {
        require(verified[msg.sender] == false, 'already set');
        emails[msg.sender] = _email;
        verified[msg.sender] = true;
    }
}
