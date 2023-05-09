import PLAYERS from '../../store/players';
import axios from 'axios';
import { calculateAverageOfArray, sumArray } from '../../helpers/helpers';

const updateTurns = (gameTitle, player, newTurnsArr) => {
    if (player === PLAYERS.ONE) {
        const average = calculateAverageOfArray(newTurnsArr);
        const newScore = 501 - sumArray(newTurnsArr);
        return axios.patch(`http://localhost:3001/normal-games/${gameTitle}`, {
            players: {
                playerOne: {
                    turns: newTurnsArr,
                    averageWithoutDoubles: average,
                    score: newScore
                }
            }
        });
    } else {
        const average = calculateAverageOfArray(newTurnsArr);
        const newScore = 501 - sumArray(newTurnsArr);
        return axios.patch(`http://localhost:3001/normal-games/${gameTitle}`, {
            players: {
                playerTwo: {
                    turns: newTurnsArr,
                    averageWithoutDoubles: average,
                    score: newScore
                }
            }
        });
    }
};

export default updateTurns;
