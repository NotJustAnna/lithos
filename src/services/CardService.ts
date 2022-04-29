import { LithosCard } from '../models/LithosCard';
import cards from './cards.json';
import _ from 'lodash';

export class CardService {
  getSquirrelCard(): LithosCard {
    return {
      name: 'Squirrel',
      description: 'A defenseless squirrel.',
      atk: 0,
      hp: 1,
      sacrifices: 0,
    }
  }

  getCards(): LithosCard[] {
    return cards;
  }

  getRandomStartingHand(): LithosCard[] {
    const squirrel = this.getSquirrelCard();
    const cardSource = [...this.getCards(), squirrel, squirrel];

    return [
      _.sample(cardSource) || squirrel,
      _.sample(cardSource) || squirrel,
      _.sample(cardSource) || squirrel,
      _.sample(cardSource) || squirrel,
    ]
  }
}
