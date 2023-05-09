import axios from 'axios';

const getOne = (title) => {
    return axios.get(`http://localhost:3001/normal-games/${title}`);
};

export default getOne;
