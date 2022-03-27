const fs = require('fs')

var async = require('async');

// try {
//     const data = fs.readFileSync('sample.xml', 'utf8')
//     console.log(data)
//     callback(data, 1);
//   } catch (err) {
//     console.error(err)
//     callback(err, 0);
    
//   }

var myfuncs = [];

for (let index = 0; index < 1800; index++) {

    myfuncs.push(function(callback) {

        try {
            const data = fs.readFileSync('Samplexml100.xml')
            // console.log(data)
            // callback(data, 1);

            var parseString = require('xml2js').parseString;
            // var xml = "<root>Hello xml2js!</root>"
            parseString(data, function (err, result) {
                if(err){
                    callback(err, 555);
                    console.log("*********************************************************************************************************")
                }else{
                    // console.log(JSON.stringify(result));
                    callback(result, 1);
                }
               
            });


          } catch (err) {
            // console.error(err)
            console.log("*********************************************************************************************************")
            callback(err, 555);
            
          }
        })
    
}


async.parallel(myfuncs,function(callback) {
    // console.log("Results123.................",JSON.stringify(callback));
  })
