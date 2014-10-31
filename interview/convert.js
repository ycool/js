#!/usr/bin/env node

// http://www.itint5.com/oj/#23

var decToExcel = function (n) {
	var s = "";
	var d = 0;
	while (n > 0) {
		d = n % 26
		if (n == 26) {
			n = 0
		} else {
			n = Math.floor(n / 26)
		}
		d = (d == 0 ? 26 : d)
		s = String.fromCharCode(d - 1 + "A".charCodeAt()) + s;
	}
	return s;
}

var excelToDec = function (s) {
	var n = 0;
	s = s.toUpperCase();
	var i = 0;
	while (i < s.length) {
		n = n * 26 + (1 + s.charCodeAt(i) - "A".charCodeAt());
		i++;
	}
	return n
}

for (var i = 1; i < 100; i++) {
	console.log("dec <=> Execl:", i, "=>", decToExcel(i), "=>", excelToDec(decToExcel(i)));
}
