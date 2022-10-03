import resetResponsePosition from './resetResponsePosition.js'
import incrementResponsePosition from './incrementResponsePosition.js'
import getResponsePosition from './getResponsePosition.js'
import replyToTweet from './replyToTweet.js'
import writeTweetIDToFile from './writeTweetIDToFile.js'

const test = async() => {
console.log(await resetResponsePosition());
}

const test2 = async() => {
    console.log(await incrementResponsePosition());
}

const test3 = async() => {
    console.log(await getResponsePosition());
}

const test4 = async() => {
    replyToTweet();
}

const test5 = async() => {
    writeTweetIDToFile("1543583993572069376", "rach__d_", 0);
}

test5()