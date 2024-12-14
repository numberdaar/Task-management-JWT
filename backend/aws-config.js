const { S3Client } = require("@aws-sdk/client-s3"); // Import the specific client you need
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const s3Client = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

const dynamoDBClient = new DynamoDBClient({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

module.exports = { s3Client, dynamoDBClient };
