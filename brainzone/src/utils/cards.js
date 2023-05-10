import { randomInt } from "./randomNumber";


export function randomCard() {
    const color = randomInt(0,1) % 2 == 0 ? 'red': 'black';
    const cardTypes = {'red': ['Diamonds', 'Hearts'], 'black': ['Clubs', 'Spades']};
    const cardType = cardTypes[color][randomInt(0, 1)];
    const cardNumber = randomInt(2, 14);
    return `${cardType}/${cardNumber}.png`
  }