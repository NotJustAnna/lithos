import styles from './index.module.scss';
import img from './images/wolfcub.png';

export interface CardProps {
  size?: 'sm' | 'md';
  name: string;
  description: string;
  atk: number;
  hp: number;
}

function Attr(props: { value: number; type: string }) {
  return <div>
    <div className={styles.value}>{props.value}</div>
    <div className={styles.type}>{props.type}</div>
  </div>;
}

function Separator() {
  return <div className={styles.hr}/>;
}

export default function Card(props: CardProps) {
  return <button className={props.size === 'sm' ? styles.cardSm : styles.cardMd}>
    <div className={styles.title}>{props.name}</div>
    <Separator/>
    <img alt={props.description} src={img} title={props.description}/>
    <Separator/>
    <div className={styles.attr}>
      <Attr type="atk" value={props.atk}/>
      <Attr type="hp" value={props.hp}/>
    </div>
  </button>;
}
