import axios from 'axios';

const create = (title, pOne, pTwo, legs, gameType) => {
    return axios.post('http://localhost:3001/normal-games', {
        title: title,
        gameLegs: legs,
        gameType: gameType,
        turn: 1,
        startingTurn: 1,
        players: {
            playerOne: {
                name: pOne,
                totalAverage: 0,
                averageWithoutDoubles: 0,
                legs: 0,
                score: 501,
                turns: []
            },
            playerTwo: {
                name: pTwo,
                totalAverage: 0,
                averageWithoutDoubles: 0,
                legs: 0,
                score: 501,
                turns: []
            }
        }
    });
};

export default create;
