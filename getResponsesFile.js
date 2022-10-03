import fs from 'fs';

const getResponsesFile = async() => {

    try {
        const readFile = await fs.promises.readFile('responses.json', 'utf8');
        const parsedReadFile =  JSON.parse(readFile);
        return parsedReadFile  
    } catch (error) {
        console.log('Error could not get information from responses.json ' + error)
    }
    
}

export default getResponsesFile