import styles from './index.module.scss';
import Board from '../Board';
import Sidebar from '../Sidebar';
import HealthBar from '../HealthBar';
import CardsAndDeck from '../CardsAndDeck';
import GameStatus from '../GameStatus';
import { injector } from '../../services';
import { CardService } from '../../services/CardService';
import { useState } from 'react';

export default function Game() {
  const [cardService] = useState<CardService>(injector.get(CardService))
  const hand = cardService.getRandomStartingHand();
  //const [hand, setHand] = useState(cardService.getRandomStartingHand());
  return <>
    <div className={styles.row}>
      <Sidebar side="left" title="Status">
        <HealthBar health={0}/>
        <GameStatus status="enemy_attack"/>
      </Sidebar>
      <Board/>
      <Sidebar side="right" title="Power-ups"/>
    </div>
    <CardsAndDeck cardAmount={4} squirrelAmount={7} currentHand={hand}/>
  </>;
}
