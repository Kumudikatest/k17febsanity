const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    debugger;
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: "us-east-1_HdYJb7Znp",
            Limit: 10
        }).promise();
        //console.log(data);

    } catch (err) {
        //console.log(err);
        // error handling goes here
    };
    //console.log("test");
    try {
        let data = await s3.listObjects({
            Bucket: "cloud9-ktest",
            MaxKeys: 10
        }).promise();
        console.log(data);

    } catch (err) {
        //console.log(err);
        // error handling goes here
    };
    return { "message": "Successfully executed" };
};