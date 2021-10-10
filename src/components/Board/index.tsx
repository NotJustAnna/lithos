import styles from './index.module.scss';
import CardSlot from '../CardSlot';
import Card from '../Card';

export default function Board() {
  return <div className={styles.col}>
    <div className={styles.row}>
      <CardSlot/>
      <Card size="md" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="md" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="md" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
    </div>
    <div className={styles.row}>
      <CardSlot/>
      <Card size="md" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <CardSlot/>
      <CardSlot/>
    </div>
  </div>
}
