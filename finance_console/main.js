
var util = require('util');
require('colors');
var _ = require('lodash');

var yahooFinance = require('yahoo-finance');
// http://www.canbike.org/information-technology/yahoo-finance-url-download-to-a-csv-file.html

var FIELDS = _.flatten([
    'n', // name
    'b2', // ask
    'h', // day high
    'g', // day low
    'k', // 52 week high
    'j', // 52 week low
    'k5', // change percent from 52-week high
    'j6', // change percent from 52-week low
    'm3', // 50-day moving avg
    'm4', // 200-day moving avg
    'r', // P/E ratio
]);
var SYMBOLS = require('./stocks.json');

SYMBOLS = SYMBOLS.stocks;
SYMBOLS = _.uniq(SYMBOLS);


yahooFinance.snapshot({
    fields: FIELDS,
    symbols: SYMBOLS
}, function (err, result) {
    if (err) { throw err; }
    console.log('after filtering ... ');

    // the stock is lower 50% of 52 week high
    // and the stock price is large enough (>20)
    result = _.filter(result, function (snapshot, symbol) {
        return Math.abs(snapshot.percebtChangeFrom52WeekHigh) > .5 && 
            (snapshot["52WeekHigh"] - snapshot["52WeekLow"] > 20);
    })

    // the stock is not flat for a long time
    result = _.filter(result, function (snapshot, symbol) {
        return (Math.abs(snapshot["50DayMovingAverage"] - 
          snapshot["200DayMovingAverage"]) / snapshot["50DayMovingAverage"]) 
          > 0.2;
    })

    // sort by change ratio
    result = _.sortBy(result, function(snapshot) { 
      return Math.abs(snapshot.percebtChangeFrom52WeekHigh); });

    _.each(result, function (snapshot, symbol) {
        console.log(util.format('=== %s ===', symbol).cyan);
        snapshot["url"] = "http://finance.yahoo.com/q?s=" + snapshot.symbol;
        console.log(JSON.stringify(snapshot, null, 2));
    });;
});
