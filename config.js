const AWS = require("aws-sdk");
AWS.config.update({ region: process.env.AWS_REGION });
const ddb = new AWS.DynamoDB.DocumentClient();
module.exports = { ddb };
