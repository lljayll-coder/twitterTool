import fs from 'fs';

const incrementResponsePosition = async() => {

    try {
        const readFile = await fs.promises.readFile('responsePosition.json', 'utf8');
        const parsedReadFile =  JSON.parse(readFile);

        let increment = parsedReadFile[0] + 1; //take account and append to array
        increment = [increment];
    
    let final = JSON.stringify(increment);
    
        fs.writeFile('responsePosition.json', final, (err) => {
            if(err) throw err;
            console.log('Response position file incremented');
        });

        return final  
    } catch (error) {
        console.log('Error could not increment responsePosition.json' + error)
    }
    
}

export default incrementResponsePosition