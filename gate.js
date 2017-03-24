/**
*   Opening the gate
*/
const path = require('path');
const config = require(path.join(__dirname,'config.json'));

function compile(){
    var comp = require('child_process').exec;
    comp('cd wiring && make -b',function(error,stdout,stderr){
        console.log('[compile] stdout: ',stdout);
        console.log('[compile] stderr: ',stderr);
        if(error != null){
            console.log('[compile] exec error: ',error);
        }
    });
}

function openGate(){
    var exec = require('child_process').exec;
    exec('./wiring/open',function(error,stdout,stderr){
        console.log('[open] stdout: ',stdout);
        console.log('[open] stderr: ',stderr);
        if(error != null){
            console.log('[open] exec error: ',error);
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
    test: test,
    compile: compile,
    openGate: openGate,
    closeGate: closeGate
}
