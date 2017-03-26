const fs = require('fs');
const jsfs = require('jsonfile');
const path = require('path');
const config = require(path.join(__dirname,'config.json'));

// Create folder for storage
if(process.platform == "win32"){
    var log_dir = __dirname+'/'+config['setup'].log_dir;
    var gatelog = __dirname+'/'+config['setup'].log_dir+'/'+config['setup'].gatelog;
    if(!fs.existsSync(log_dir)){
        fs.mkdirSync(log_dir);
        if(!fs.existsSync(gatelog)){
            var init = {"log":[]};
            jsfs.writeFile(gatelog,init,function(err){
                if(err){
                    console.log("[INFO] Write Error")
                }
            });
        }
    }
}
else if(process.platform == "linux"){
    var log_dir = config['setup'].linux_root+'/'+config['setup'].log_dir;
    var gatelog = config['setup'].linux_root+'/'+config['setup'].log_dir+'/'+config['setup'].gatelog;
    if(!fs.existsSync(log_dir)){
        fs.mkdirSync(log_dir);
        if(!fs.existsSync(gatelog)){
            var init = {"log":[]};
            jsfs.writeFile(gatelog,init,function(err){
                if(err){
                    console.log("[INFO] Write Error")
                }
            });
        }
    }
}
