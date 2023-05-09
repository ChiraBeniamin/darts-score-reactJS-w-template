import { calculateAverage, sumArray } from '../../helpers/helpers';
import axios from 'axios';

// ==========MAIN FUNCTION=========
const updateScore = (game, player, score) => {
    if (player === 'playerOne') {
        if (score > game.players.playerOne.score) {
            return updateIfScoreIsBiggerOne(game);
        }
        const average = calculateAverage(game.players.playerOne.turns, score);
        const totalAverage = calculateAverage(game.players.playerOne.allTurns, score);
        return updateOne(game, score, average, totalAverage);
    } else {
        if (score > game.players.playerTwo.score) {
            return updateIfScoreIsBiggerTwo(game);
        }
        const average = calculateAverage(game.players.playerTwo.turns, score);
        const totalAverage = calculateAverage(game.players.playerTwo.allTurns, score);
        return updateTwo(game, score, average, totalAverage);
    }
};

const updateOne = (game, score, average, totalAverage) => {
    let newTurns = [...game.players.playerOne.turns, score];
    let newScore = 501 - sumArray(newTurns),
        updatedGame = {
            ...game,
            players: {
                playerOne: {
                    score: newScore,
                    averageWithoutDoubles: average,
                    totalAverage: totalAverage,
                    turns: newTurns,
                    allTurns: [...game.players.playerOne.allTurns, score]
                }
            }
        };
    return axios.patch(`http://localhost:3001/normal-games/${game.title}`, {
        ...updatedGame
    });
};
const updateTwo = (game, score, average, totalAverage) => {
    let newTurns = [...game.players.playerTwo.turns, score];
    let newScore = 501 - sumArray(newTurns),
        updatedGame = {
            ...game,
            players: {
                playerTwo: {
                    score: newScore,
                    averageWithoutDoubles: average,
                    totalAverage: totalAverage,
                    turns: newTurns,
                    allTurns: [...game.players.playerTwo.allTurns, score]
                }
            }
        };
    return axios.patch(`http://localhost:3001/normal-games/${game.title}`, {
        ...updatedGame
    });
};
const updateIfScoreIsBiggerOne = (game) => {
    const updatedGame = {
        ...game,
        players: {
            playerOne: {
                score: game.players.playerOne.score,
                turns: [...game.players.playerOne.turns, 0]
            }
        }
    };
    return axios.patch(`http://localhost:3001/normal-games/${game.title}`, {
        ...updatedGame
    });
};
const updateIfScoreIsBiggerTwo = (game) => {
    const updatedGame = {
        ...game,
        players: {
            playerTwo: {
                score: game.players.playerTwo.score,
                turns: [...game.players.playerTwo.turns, 0]
            }
        }
    };
    return axios.patch(`http://localhost:3001/normal-games/${game.title}`, {
        ...updatedGame
    });
};
export default updateScore;
