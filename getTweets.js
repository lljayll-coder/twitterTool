import getUserID from "./getUserID.js"; 
import readWriteClient from './readWriteClient.js';

const getTweets = async(userName) => {

    const ID = await getUserID(userName);

    try {
        const tweets = await readWriteClient.v2.userTimeline(ID.data.id, { exclude: 'replies' })
        return tweets.tweets
    } catch (error) {
        console.log('Error: can not fetch tweets ' + error)
    }
}

export default getTweets