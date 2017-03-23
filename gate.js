/**
*   Opening the gate
*/
function test(){
    let comp = require('child_process').exec;
    comp('dir',function(error,stdout,stderr){
        console.log('[Test] stdout:',stdout);
        console.log('[Test] stderr: ',stderr);
        if(error != null){
            console.log('[Test] exec error: ',error);
        }
    });
}

function compile(){
    let comp = require('child_process').exec;
    comp('cd wiring && make -m',function(error,stdout,stderr){
        console.log('[compile] stdout: ',stdout);
        console.log('[compile] stderr: ',stderr);
        if(error != null){
            console.log('[compile] exec error: ',error);
        }
    });
}

function openGate(){
    let exec = require('child_process').exec;
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
    },3000);
}

function closeGate(){
    let exec = require('child_process').exec;
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
