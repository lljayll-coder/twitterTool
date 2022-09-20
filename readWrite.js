
const { TwitterApi } = require('twitter-api-v2');
const dotenv = require('dotenv');

dotenv.config();

const client = new TwitterApi({
    appKey: process.env.appKey,
    appSecret: process.env.appSecret,
    accessToken: process.env.accessToken,
    accessSecret: process.env.accessSecret
})

const readWriteClient = client.readWrite;

module.exports = readWriteClient