import axios from 'axios';

const deleteGame = (id) => {
    return axios.delete(`http://localhost:3001/normal-games/${id}`);
};

export default deleteGame;
