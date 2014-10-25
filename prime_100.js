#!/usr/bin/env node

function isPrime(n) {
    for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
	if (n % i == 0) {
	    return false;
	}
    }
    return true;
}

var primes = [];
var i = 2;
do {
    if (isPrime(i)) {
	primes.push(i);
    }
    i++;
} while (primes.length <= 100);

var fs = require("fs");
var outfile = "prime_100.txt";
var primes_str = primes.join(",");
fs.writeFileSync(outfile, primes_str);
console.log("Script: " + __filename  + "\n File: " + outfile);
