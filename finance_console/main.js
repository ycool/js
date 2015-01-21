
var util = require('util');
require('colors');
var _ = require('lodash');

var yahooFinance = require('yahoo-finance');
// http://www.canbike.org/information-technology/yahoo-finance-url-download-to-a-csv-file.html

var FIELDS = _.flatten([
    'n4',
    'n', // name
    'b2', // ask
    'b3', // bid
    'h', // day high
    'g', // day low
    'y',  // dividends
    'k', // 52 week high
    'j', // 52 week low
    'k4', // change from 52-week high
    'j5', // change from 52-week low
    'k5', // change from 52-week high
    'j6', // change percent from 52-week low
    'm3', // 50-day moving avg
    'm4', // 200-day moving avg
    'r', // P/E ratio
]);
var SYMBOLS = require('./stocks.json');

SYMBOLS = SYMBOLS.stocks;

yahooFinance.snapshot({
    fields: FIELDS,
    symbols: SYMBOLS
}, function (err, result) {
    if (err) { throw err; }
    console.log('after filtering ... ');
    result = _.filter(result, function (snapshot, symbol) {
        return Math.abs(snapshot.percebtChangeFrom52WeekHigh) > .5 && 
            (snapshot["52WeekHigh"] - snapshot["52WeekLow"] > 20);
    })

    _.each(result, function (snapshot, symbol) {
        console.log(util.format('=== %s ===', symbol).cyan);
        console.log(JSON.stringify(snapshot, null, 2));
    });;
});
