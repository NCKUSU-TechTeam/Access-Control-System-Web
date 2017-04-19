const fs = require('fs');
const jsfs = require('jsonfile');
const path = require('path');
const config = require(path.join(__dirname,'config.json'));

var gatelog = "";

// Create folder for storage
if(process.platform == "win32"){
    var gatelog = __dirname+'/'+config['setup'].log_dir+'/'+config['setup'].gatelog;
}
else if(process.platform == "linux"){
    // var gatelog = config['setup'].linux_root+'/'+config['setup'].log_dir+'/'+config['setup'].gatelog;
    var gatelog = __dirname+'/'+config['setup'].log_dir+'/'+config['setup'].gatelog;
}

// Windows record file
function record_log(id,time,callback){
    var logobj = {
        "who": id,
        "timestamp": time
    }
    var curobj;
    jsfs.readFile(gatelog,function(err,curobj){
        if(err){

        }
        else {
            // append obj
            curobj.log.push(logobj);
            // using replay message deliver
            jsfs.writeFile(gatelog,curobj,function(err){
                if(err){
                    console.log('[INFO] Error with append record files.');
                    callback(0);
                }
                else{
                    callback(1);
                }
            });
        }
    });
}

module.exports = {
    record : record_log
}
