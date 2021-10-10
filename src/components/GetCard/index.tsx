import styles from './index.module.scss';

export interface GetCardProps {
  size?: 'sm' | 'md';
  squirrel?: boolean;
  amount: number
}

export default function GetCard(props: GetCardProps) {
  return <button className={props.size === 'sm' ? styles.getCardSm : styles.getCardMd}>
    <div className={styles.title}>DRAW {props.squirrel ? 'SQUIRREL' : 'CARD'}</div>
    <div>{props.amount} left</div>
  </button>;
}
