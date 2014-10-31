#!/usr/bin/env node

function isFromTwoString(s1, s2, s3) {
	if (s1.length + s2.length != s3.length) {
		return false;
	}
	if (s3.length == 0) {
		return true;
	}
	if (s1[0] == s3[0]) {
		return isFromTwoString(s1.slice(1), s2, s3.slice(1));
	}
	if (s2[0] == s3[0]) {
		return isFromTwoString(s1, s2.slice(1), s3.slice(1));
	}
	return false;
}

var s1 = "abc";
var s2 = "def";
var s3 = "abcdef";
console.log(s1, ",", s2, ",", s3, ":", isFromTwoString(s1, s2, s3));
s3 = "adbecf";
console.log(s1, ",", s2, ",", s3, ":", isFromTwoString(s1, s2, s3));
s3 = "abdecf";
console.log(s1, ",", s2, ",", s3, ":", isFromTwoString(s1, s2, s3));
s3 = "adefbc";
console.log(s1, ",", s2, ",", s3, ":", isFromTwoString(s1, s2, s3));
s3 = "abcdeg";
console.log(s1, ",", s2, ",", s3, ":", isFromTwoString(s1, s2, s3));



