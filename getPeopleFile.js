import fs from 'fs';

const getPeopleFile = async() => {

    try {
        const readFile = await fs.promises.readFile('people.json', 'utf8');
        const parsedReadFile =  JSON.parse(readFile);
        return parsedReadFile  
    } catch (error) {
        console.log('Error could not get information from people.json ' + error)
    }
    
}

export default getPeopleFile