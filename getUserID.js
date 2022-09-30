import readWriteClient from './readWriteClient.js';

const getUserID = async(ID) => {

    try {
        const userID = await readWriteClient.v2.userByUsername(ID);
        return userID
    } catch (error) {
        console.log('Error: can not fetch numeric ID ' + error)
    }
    
}

export default getUserID