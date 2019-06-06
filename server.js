// const express = require("express");
const simpleParser = require("mailparser").simpleParser;
const AWS = require("aws-sdk");
const Record = require("./utils").Record;

AWS.config.loadFromPath(".aws/credentials.json");

var s3 = new AWS.S3();
// console.log(s3.endpoint);

// let app = express();

let params = {
    Bucket: "test-bucket-q45hohw46owrnonryowrw"
};

function getEmails() {
    return new Promise((resolve, reject) => {
        s3.listObjectsV2(params, (err, data) => {
            if (err) {
                reject(err);
            }
            // console.log(data)
            resolve(
                data.Contents.map(content => {
                    return content.Key;
                })
            );
        });
    });
};

async function getContents() {
    let keys = await getEmails();
    // console.log(keys);

    let contents = [];
    for (let key of keys) {
        let objectParams = params;
        objectParams["Key"] = key;
        // console.log(objectParams);

        let email = await new Promise((resolve, reject) => {
            s3.getObject(objectParams, (err, data) => {
                if (err) {
                    reject(err);
                }
                //console.log(data);
                resolve(data.Body);
            });
        });
        let parsed = await simpleParser(email);
        contents.push(parsed);
    }
    console.log(contents[0])
    return contents;
}

// testing class properties
let gayBaby = new Record('myDoc', 'myProj', 'mySubj', 'Gaby', 'Baby', 'email', 'Jan 12');
console.log(gayBaby.documentTransferInfo);

/*
let contents = getContents().then((result) => {
    console.log('werks');
    // for (let email of result) {
    //     // console.log(Object.keys(email));
    // }
});
*/

/*
app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
*/