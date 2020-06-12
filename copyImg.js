var http = require('http');
var fs = require('fs');

// File to read
var myReadStream = fs.createReadStream(__dirname+'/pickcolor.png');

// File to write
var myWriteStream = fs.createWriteStream(__dirname+'/newpic.png');

//   Read and write
myReadStream.on('data', function(chunk){
    myWriteStream.write(chunk);

});




// var fs = require('fs');

// fs.readFile('readme.md','utf8', function(err,data){

//     // If file exist, delete it.
//     fs.access('write.md', fs.constants.F_OK, function(err){
//         if(!err)
//             fs.unlink('write.md', function(){});
            
//     });

//     // Create a new file
//     fs.writeFile('write.md',data,function(){console.log("Done!");});
// });
