const express = require('express');
const AWS = require('aws-sdk');

AWS.config.loadFromPath(".aws/credentials.json");

var s3 = new AWS.S3();

let app = express();

let params = {
    Bucket:"test-bucket-q45hohw46owrnonryowrw"
};
s3.listObjects(params,function(err,data){
    if(err) console.log(err);
    else console.log(data)
});

app.get('/',(req,res)=>{
    res.send('hello')
});


app.listen(8080,()=>{
    console.log('Server is running on port 8080')
});