import axios from 'axios';

const getArchived = () => {
    return axios.get('http://localhost:3001/archived-games');
};

export default getArchived;
