import styles from './index.module.scss';
import Board from '../Board';
import Sidebar from '../Sidebar';
import HealthBar from '../HealthBar';
import CardsAndDeck from '../CardsAndDeck';
import GameStatus from '../GameStatus';

export default function Game() {
  return <>
    <div className={styles.row}>
      <Sidebar side="left" title="Status">
        <HealthBar health={0}/>
        <GameStatus status="enemy_attack"/>
      </Sidebar>
      <Board/>
      <Sidebar side="right" title="Power-ups"/>
    </div>
    <CardsAndDeck/>
  </>;
}
