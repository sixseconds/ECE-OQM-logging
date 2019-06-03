const express = require('express');
const AWS = require('aws-sdk');

AWS.config.loadFromPath(".aws/credentials.json");

var s3 = new AWS.S3();

let app = express();

let params = {
    Bucket:"test-bucket-q45hohw46owrnonryowrw",
    Key: 'emails/3msr188duiuc2p0tskdk9c2cbetep63gqrq6em81'
};
s3.getObject(params,function(err,data){
    if(err) console.log(err);
    else console.log(data.Body.toString())
});

app.get('/',(req,res)=>{
    res.send('hello')
});


app.listen(8080,()=>{
    console.log('Server is running on port 8080')
});