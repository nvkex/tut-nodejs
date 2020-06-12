var fs = require('fs');
const Blowfish = require('javascript-blowfish');
var img = fs.readFileSync('encrypted.png','utf8');

var bf = new Blowfish("key", "cbc");
var decrypted = bf.decrypt(img, "cbcvecto");
fs.writeFileSync('decryptIMG.png',decrypted);