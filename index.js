const readWriteClient = require('./readWrite.js');
const dotenv = require('dotenv');

dotenv.config();

const newTweet = async(message) => {

    try {
        await readWriteClient.v2.tweet(message);
        console.log('Tweet posted succesfully')
    } catch (error) {
        console.log('Tweet could not be posted ' + error)
    }

};

const getUserID = async(ID) => {

    try {
        const userID = await readWriteClient.v2.userByUsername(ID);
        return userID
    } catch (error) {
        console.log('Error: can not fetch numeric ID ' + error)
    }
    
}

const getTweets = async(userName) => {

    const ID = await getUserID(userName);

    try {

    const tweets = await readWriteClient.v2.userTimeline(ID.data.id, { exclude: 'replies' })
    
    console.log(tweets.tweets)
        
    } catch (error) {
        console.log('Error: can not fetch tweets ' + error)
    }
    

}

const replyToTweet = async(tweetID) => {

    await readWriteClient.v2.reply('He deserves the support 100%', tweetID);

}

//replyToTweet('1566892187119493121')

getTweets('HhqJason')

