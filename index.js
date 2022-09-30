import getPeopleFile from './getPeopleFile.js';
import getTweets from './getTweets.js';

let counter = 0; //keeps track of which person the prgram is currently looking at in the people.json file

const checkForLatestTweet = async() => {

    const peopleToFollow = await getPeopleFile(); //gets contents of people.json
    const currentPersonOfInterest = peopleToFollow[counter][0]; //set current person of interest to counter value
    const currentPersonOfInterestID = peopleToFollow[counter][1]; //set current person of interest to counter value
    const currentPersonTweet = await getTweets(currentPersonOfInterest) //get current person's last tweet

    console.log('---------------------------------------------------------------') //to separate console logs for more readability
    console.log(counter)
    console.log('Last tweet ID: ' + currentPersonTweet[0].id)
    console.log('Last tweet: ' + currentPersonTweet[0].text)
    console.log('')
    compareToFile(currentPersonTweet[0].id, currentPersonOfInterestID, peopleToFollow)
 
}

const compareToFile = (currentTweetID, currentPersonOfInterestID, peopleToFollow) => {

    console.log('Comparing to records')

    if (currentTweetID == currentPersonOfInterestID) {
        console.log("Tweet is on record. Scanning for next tweet")
    }

    else if (currentTweetID != currentPersonOfInterestID) {
        console.log("Tweet is new and not on record")
    }
    else {
        console.log('Error, could not determine if tweet is on record')
    }

    restartLoop(peopleToFollow)

}

const restartLoop = (peopleToFollow) => {

    setTimeout(function() {
        
       if (counter < Object.keys(peopleToFollow).length-1) {
        console.log("Checking for next ID on file...")
        counter = counter + 1;
       }
       else {
        counter = 0;
        console.log("End of file reached. Scanning tweets from first ID on file.")
        }
        
        checkForLatestTweet()

      }, 10000);

    

}

checkForLatestTweet()