import fs from 'fs';

const writeTweetIDToFile = (tweetID, counter) => { 

    fs.readFile('people.json', (err, data) => {

        if (err) throw err; //if error found

        let file =  JSON.parse(data); //convert file to json format

        
        console.log(counter)
        file[0][1] = tweetID //modify file

        let final = JSON.stringify(file);
        
        fs.writeFile('people.json', final, (err) => {
            if(err) throw err;
            console.log('Last tweet ID updated');
        });

    });

}

export default writeTweetIDToFile

