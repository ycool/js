#!/usr/bin/env node

// https://oj.leetcode.com/problems/reverse-words-in-a-string/

// Given an input string, reverse the string word by word.

// For example,
// Given s = "the sky is blue",
// return "blue is sky the".

var uu = require('underscore');

var reverseWords = function(s) {
	var words = s.split(' ');
	words = uu.filter(words, function(w) { return w.length > 0});
	words.reverse();
	return words.join(' ');
}; 

var s = 'the   sky is blue';
console.log(s);
console.log(reverseWords(s));
console.log(reverseWords(reverseWords(s)));
