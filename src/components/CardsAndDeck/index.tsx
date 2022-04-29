import styles from './index.module.scss';
import GetCard from '../GetCard';
import Card from '../Card';
import { LithosCard } from '../../models/LithosCard';

export interface CardsAndDeckProps {
  squirrelAmount: number,
  cardAmount: number,
  currentHand: LithosCard[]
}

function cardRowStyle(amount: number) {
  if (amount < 6) {
    return 'cardRow0';
  }
  if (amount < 7) {
    return 'cardRow1';
  }
  if (amount < 8) {
    return 'cardRow2';
  }
  if (amount < 10) {
    return 'cardRow3';
  }
  if (amount < 12) {
    return 'cardRow4';
  }
  return 'cardRow5';
}

export default function CardsAndDeck(props: CardsAndDeckProps) {
  return <div className={styles.mainRow}>
    <div className={styles[cardRowStyle(props.currentHand.length)]}>
      {props.currentHand.map((card, index) =>
        <Card key={index} size="sm" name={card.name} description={card.description} atk={card.atk} hp={card.hp}/>,
      )}
    </div>
    <div className={styles.deckRow}>
      <GetCard squirrel={true} amount={props.squirrelAmount}/>
      <GetCard amount={props.cardAmount}/>
    </div>
  </div>;
}
