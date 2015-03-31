#!/usr/bin/env node

// Reverse bits of a given 32 bits unsigned integer.

// For example, given input 43261596 (represented in binary as 
// 00000010100101000001111010011100), return 964176192 
// (represented in binary as 00111001011110000010100101000000).

// Follow up:
// If this function is called many times, how would you optimize it?

// node prog

var reverseBits = function(n) {
    var r = 0; 
    for (var i = 0; i < 32; i++) {
        r = ((r << 1) >>>0);
        r += n & 1;
        n = (n >> 1);
    }
    return r;
};


console.log(reverseBits(43261596));



