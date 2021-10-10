import styles from './index.module.scss';

export interface CardSlotProps {
  size?: 'sm' | 'md';
}

export default function CardSlot(props: CardSlotProps) {
  return <button className={props.size === 'sm' ? styles.cardSlotSm : styles.cardSlotMd}/>;
}
