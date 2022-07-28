// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DIDSSI is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter public didIds;
    mapping(address => string) public digitalIdentities;
    mapping(address => bool) public registered;
    mapping(address => Profile) public profiles;
    mapping(address => bool) public verified;
    struct Profile {
        address add;
        string name;
        string email;
        string uid;
        string pan;
        string license;
        bool set;
    }
    constructor() {}
    function register(string memory _name) public {
        require(registered[msg.sender] == false, 'already registered');
        digitalIdentities[msg.sender] =_name;
        registered[msg.sender] = true;
        didIds.increment();
    }
    function addProfile(string memory _email, string memory _uid, string memory _pan, string memory _license) public {
        require(registered[msg.sender] == true, 'not registered');
        require(verified[msg.sender] == false, 'already set');
        require(profiles[msg.sender].set == false, 'already set');
        profiles[msg.sender] = Profile(msg.sender, digitalIdentities[msg.sender], _email, _uid, _pan, _license, true);
    }
    function checkRegistration(address _address) public view returns(bool) {
        return registered[_address];
    }
    function checkVerification(address _address) public view returns(bool) {
        return registered[_address];
    }
    function verify(address _profile) public onlyOwner {
        require(profiles[_profile].set == true, 'not set');
        require(verified[msg.sender] == false, 'already verified');
        verified[_profile] = true;
    }
}