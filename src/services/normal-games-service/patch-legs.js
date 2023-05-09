import PLAYERS from '../../store/players';
import axios from 'axios';
import { calculateAverage } from '../../helpers/helpers';

const updateLegs = (game, player, score) => {
    if (player === PLAYERS.ONE) {
        let allTurns = [...game.players.playerOne.allTurns, score];
        const totalAverage = calculateAverage(game.players.playerOne.allTurns, score);
        const updatedGame = {
            ...game,
            players: {
                playerOne: {
                    legs: game.players.playerOne.legs + 1,
                    score: 501,
                    turns: [],
                    allTurns: allTurns,
                    averageWithoutDoubles: 0,
                    totalAverage: totalAverage
                },
                playerTwo: {
                    score: 501,
                    turns: [],
                    averageWithoutDoubles: 0
                }
            }
        };
        return axios.patch(`http://localhost:3001/normal-games/${game.title}`, {
            ...updatedGame
        });
    } else {
        let allTurns = [...game.players.playerTwo.allTurns, score];
        const totalAverage = calculateAverage(game.players.playerTwo.allTurns, score);
        const updatedGame = {
            ...game,
            players: {
                playerOne: {
                    score: 501,
                    turns: [],
                    averageWithoutDoubles: 0
                },
                playerTwo: {
                    legs: game.players.playerTwo.legs + 1,
                    score: 501,
                    turns: [],
                    allTurns: allTurns,
                    averageWithoutDoubles: 0,
                    totalAverage: totalAverage
                }
            }
        };
        return axios.patch(`http://localhost:3001/normal-games/${game.title}`, {
            ...updatedGame
        });
    }
};

export default updateLegs;
