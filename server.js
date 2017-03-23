/* Receiving Message from user */
/* Using an pure platform */
const express = require('express');
const app = express();

const fs = require('fs');
const url = require('url');
const path = require('path');

const bodyParser = require('body-parser');
const moment = require('moment');
const jsonfs = require('jsonfile');

const min_jsondb = require('./min_jsondb');
const gate = require('./gate');
// Compile at first
gate.compile();
gate.test();

/* Redirect views path */
app.set('views', path.join(__dirname, 'web/views'));

/* Setting static directory */
app.use(express.static('database'));
app.use(express.static('wiring'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Setting view engine as EJS file */
app.set('view engine', 'ejs');

const server = require('http').createServer(app);

// Get Service Main Page
app.get('/',function(req,res){
    // Welcome page for Gate system
    res.render('index',{
        title: "Access-Control-System"
    });
});

// Get Sign Up usage
app.get('/register',function(req,res){
    var userinfo = url.parse(req.url,true);
    console.log("User Name : " + userinfo.query.usr);
    console.log("User Email : " + userinfo.query.email);

    // FIXME Add into database
    min_jsondb.addUser(userinfo.query.usr,userinfo.query.email,function(err,msg){
        if(err == 0){
            console.log("Error when add user. msg :"+msg);
        }
        else{
            // Successfully enroll
            res.render('redirectpage',{
                title: "Open Gate!",
                msg: "Redirect..."
            });
            // FIXME : using child process to open the gate
            gate.openGate();
        }
    });
});

// Open gate
app.get('/open',function(req,res){
    var userinfo = url.parse(req.url,true);
    console.log("User Name : " + userinfo.query.usr);

    // Check database
    min_jsondb.scanUser(userinfo.query.usr,function(err,msg){
        if(err == 0){
            console.log("Error when scan user. msg :"+msg);
        }
        else{
            res.render('redirectpage',{
                title: "Open Gate!",
                msg: "Redirect..."
            });
            // FIXME : using child process to open the gate
            gate.openGate();
        }
    })
});

server.listen(process.env.npm_package_config_port, function() {
		var host = server.address().address;
		var port = server.address().port;

		// Log: Server listening
		console.log("[INFO] ACSW server is listening at " + host + ": " + port);
});
