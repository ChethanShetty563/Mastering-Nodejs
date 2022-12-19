// File stream2file.js
// Bring in Node's file system module
const fs = require('fs');
// Make the file counter.txt we can fill by writing data to writeable stream w
const w = fs.createWriteStream('./counter.txt', { flags: 'w', mode: 0666 });

let Readable = require('stream').Readable;

let r = new Readable();

let count = 0;

r._read = function () {
  count++;
  if (count > 10) {
    return r.push(null);
  }
  setTimeout(() => r.push(count + '\n'), 500);
};

// Put w beneath r instead
r.pipe(w);
