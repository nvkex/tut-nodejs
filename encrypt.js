var fs = require('fs');
const Blowfish = require('javascript-blowfish');
var img = fs.readFileSync('pickcolor.png','utf-8');

var bf = new Blowfish("key", "cbc");
var encrypted = bf.encrypt(img, "cbcvecto");
fs.writeFileSync('encrypted.png',encrypted);