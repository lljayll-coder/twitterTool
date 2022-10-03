import fs from 'fs';

const resetResponsePosition = async() => {

    try {
      
    const reset = [0];    
    let final = JSON.stringify(reset);
    
        fs.writeFile('responsePosition.json', final, (err) => {
            if(err) throw err;
            console.log('Response position reset');
        });
        return final
    } catch (error) {
        console.log('Error could not reset responsePosition.json' + error)
    }
    
}

export default resetResponsePosition