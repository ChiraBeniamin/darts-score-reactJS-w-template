import axios from 'axios';

const archiveGame = (game) => {
    return axios.post('http://localhost:3001/archived-games', game);
};
export default archiveGame;
