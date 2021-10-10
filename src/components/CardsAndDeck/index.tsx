import styles from './index.module.scss';
import GetCard from '../GetCard';
import Card from '../Card';

export default function CardsAndDeck() {
  return <div className={styles.mainRow}>
    <div className={styles.cardRow}>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
      <Card size="sm" name="Wolf Cub" description="A wolf cub." atk={1} hp={1}/>
    </div>
    <div className={styles.deckRow}>
      <GetCard squirrel={true} amount={7}/>
      <GetCard amount={4}/>
    </div>
  </div>;
}
