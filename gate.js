/**
*   Opening the gate
*/
const path = require('path');
const config = require(path.join(__dirname,'config.json'));
var logger = require('./logger');

function compile(){
    var comp = require('child_process').exec;
    comp('cd wiring && make -B',function(error,stdout,stderr){
        console.log('[compile] stdout: ',stdout);
        console.log('[compile] stderr: ',stderr);
        if(error != null){
            console.log('[compile] exec error: ',error);
        }
    });
}

function openGate(id,time){
    var exec = require('child_process').exec;
    exec('./wiring/open',function(error,stdout,stderr){
        if(error != null){
            console.log('[open] exec error: ',error);
        }else {
            console.log('[open] stdout: ',stdout);
            console.log('[open] stderr: ',stderr);
            // Logger
            logger.record(id,time,function(err){
                if(err){
                    console.log('[INFO] Logger error.')
                }
            });
        }
    });
    /* And using time interval to close */
    setTimeout(function(){
        closeGate();
    },config['interval'].gateopentime);
}

function closeGate(){
    var exec = require('child_process').exec;
    exec('./wiring/close',function(error,stdout,stderr){
        console.log('[close] stdout: ',stdout);
        console.log('[close] stderr: ',stderr);
        if(error != null){
            console.log('[close] exec error: ',error);
        }
    });
}

module.exports = {
    compile: compile,
    openGate: openGate,
    closeGate: closeGate
}
