import readWriteClient from './readWriteClient.js';

const newTweet = async(message) => {

    try {
        await readWriteClient.v2.tweet(message);
        console.log('Tweet posted succesfully')
    } catch (error) {
        console.log('Tweet could not be posted ' + error)
    }

}

export default newTweet