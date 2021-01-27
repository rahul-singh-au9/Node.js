// OS MODULE IN NODE.JS

const os = require('os');

// will give version of system 32bit/64bit
console.log(os.arch());

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

// free momory of system
const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);

// total memory of system
const totalMemory = os.freemem();
console.log(`${totalMemory/1024/1024/1024}`);