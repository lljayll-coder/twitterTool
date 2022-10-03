import readWriteClient from './readWriteClient.js';
import getResponsesFile from './getResponsesFile.js';
import getResponsePosition from './getResponsePosition.js';
import incrementResponsePosition from './incrementResponsePosition.js';
import resetResponsePosition from './resetResponsePosition.js';
import writeTweetIDToFile from './writeTweetIDToFile.js';


const replyToTweet = async(currentTweetID, currentPersonOfInterest, counter) => {

    const responses = await getResponsesFile();
    const responsesLength = Object.keys(await responses).length;
    const responsePosition = await getResponsePosition();

    console.log('Response position: ' + await responsePosition)
    console.log('Current user: ' + currentPersonOfInterest)
    console.log('Tweet ID: ' + currentTweetID)

    const responseToTweet = await responses[await responsePosition]
    
    await readWriteClient.v2.reply(responseToTweet, currentTweetID); //tweet response
    await writeTweetIDToFile(currentTweetID, counter);

    if (await responsePosition < await responsesLength-1) {
        await incrementResponsePosition();
    }
    else {
        await resetResponsePosition();
    }
    
}

export default replyToTweet