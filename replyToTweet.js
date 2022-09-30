import readWriteClient from './readWriteClient.js';

const replyToTweet = async(tweetID) => {

    await readWriteClient.v2.reply('He deserves the support 100%', tweetID);

}

export default replyToTweet