#!/usr/bin/env node

// http://reactive-extensions.github.io/learnrx/
// http://underscorejs.org/

var _ = require("underscore");

var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

_.each(names, function(s) {
	console.log(s);
})

