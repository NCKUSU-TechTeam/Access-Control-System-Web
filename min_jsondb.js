// lib
const fs = require('fs')
const jsfs = require('jsonfile');
const path = require('path');
// path
var db_obj;

function addUser(username,useremail,callback){
    db_obj = require(path.join(__dirname,'database','key.json'))['user'];
    var flag = 0;
    for(var index in db_obj){
        if(db_obj[index].name == username){
            flag = 1;
        }
    }
    if(flag == 1){
        // Enroll same key , can't register.
        console.log("Error , with same key.");
        callback(0,"Error , with same key.");
    }
    else{
        // Enroll !
        var user_obj = {
            name: username,
            email: useremail
        }
        var wrapper_obj = {
            user: []
        }
        db_obj.push(user_obj);
        wrapper_obj.user = db_obj;
        jsfs.writeFile(path.join(__dirname,'database','key.json'),wrapper_obj,function(err){
            if(err)
                console.log("Error with database register!");
            else {
                callback(1,"Successfully register.");
            }
        });
    }
}

function scanUser(username,callback){
    db_obj = require(path.join(__dirname,'database','key.json'))['user'];
    var flag = 0;
    for(var index in db_obj){
        if(db_obj[index].name == username){
            flag = 1;
        }
    }
    if(flag == 1){
        // found this user
        callback(1,"Successfully found");
    }
    else{
        // Not found
        console.log("Error , not found this user.");
        callback(0,"Error , not found this user.");
    }
}

module.exports = {
    addUser : addUser,
    scanUser : scanUser
};
