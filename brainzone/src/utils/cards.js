

export function randomCard(color) {
    const cardTypes = {'red': ['Diamonds', 'Hearts'], 'black': ['Clubs', 'Spades']};
    const cardType = cardTypes[color][Math.floor(Math.random() * (1 - 0 + 1) + 0)];
    const min = 2;
    const max = 14;
    const cardNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return `${cardType}/${cardNumber}.png`
  }