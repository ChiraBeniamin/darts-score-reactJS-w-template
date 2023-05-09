import axios from 'axios';

export const updateTurnIndex = (value, gameTitle) => {
    console.log('UPDATETURNSINDEX--->', value, gameTitle);
    return axios.patch(`http://localhost:3001/normal-games/${gameTitle}`, {
        turn: value
    });
};
