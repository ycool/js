#!/usr/bin/env node

require('../libs/closure-library/closure/goog/bootstrap/nodejs');

console.log("hello from js!");

goog.require('goog.string.linkify');

console.log(goog.string.linkify.linkifyPlainText('Hello http://www.world.com'));
