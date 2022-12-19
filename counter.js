// File counter.js

const EventEmitter = require('events').EventEmitter;

const Counter = function (i) {
  this.increment = function () {
    i++;
    this.emit('incremented', i);
  };
};
Counter.prototype = new EventEmitter();
const counter = new Counter(10);
// Define a callback function which logs the number n you give it
const callback = function (n) {
  console.log(n);
};
// Counter is an EventEmitter, so it comes with addListener
counter.addListener('incremented', callback);
counter.increment(); // 11
counter.increment(); // 12
counter.removeListener('incremented', callback);
