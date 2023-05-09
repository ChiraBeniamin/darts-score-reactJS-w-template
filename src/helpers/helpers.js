import { BASIC_CARD_STYLE, CARD_STYLE_TURN } from '../store/cardStyles';

export const playerOneCard = (turn) => {
    if (turn === 1) {
        return CARD_STYLE_TURN;
    } else return BASIC_CARD_STYLE;
};

export const playerTwoCard = (turn) => {
    if (turn === 2) {
        return CARD_STYLE_TURN;
    } else return BASIC_CARD_STYLE;
};

export const calculateAverageOfArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;
    return average;
};
export const calculateAverage = (arr, lastNumber) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (lastNumber !== undefined) {
        sum += lastNumber;
    }
    const average = sum / (arr.length + (lastNumber !== undefined ? 1 : 0));
    return parseFloat(average.toFixed(2));
};

export const sumArray = (arr) => {
    let sumOfNumbers = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfNumbers += arr[i];
    }
    return sumOfNumbers;
};
