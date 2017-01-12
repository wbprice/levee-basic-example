'use strict';

// The following example is copy/pasted from https://github.com/krakenjs/levee#basic-usage, 
// but fails with a type error when run:
//
// TypeError: this._shortcutWrap is not a function
//     at Object.internals.Client.get [as execute] (/Users/blaine/Documents/node_modules/wreck/lib/index.js:474:17)

var Levee = require('levee');
var Wreck = require('wreck');

var options, circuit;

options = {
    maxFailures: 5,
    timeout: 60000,
    resetTimeout: 30000
};

circuit = Levee.createBreaker(Wreck.get, options);
circuit.run('http://www.google.com', function (err, req, payload) {
    // If the service fails or timeouts occur 5 consecutive times,
    // the breaker opens, fast failing subsequent requests.
    console.log(err || payload);
});

