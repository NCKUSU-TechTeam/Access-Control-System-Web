/**
*   Opening the gate
*/
function openGate(){
    let exec = require('child_process').exec;
    exec('./wiring/open',function(error,stdout,stderr){
        console.log('stdout: ',stdout);
        console.log('stderr: ',stderr);
        if(error != null){
            console.log('exec error: ',error);
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
        console.log('stdout: ',stdout);
        console.log('stderr: ',stderr);
        if(error != null){
            console.log('exec error: ',error);
        }
    });
}

module.exports = {
    openGate: openGate,
    closeGate: closeGate
}
