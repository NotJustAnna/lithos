import { LithosCard } from './LithosCard';

export interface LithosCardOnBoard {
  card: LithosCard;
  currentHp: number;
}

type Tuple4<T> = [T, T, T, T];

export interface LithosBoard {
  yourBoard: Tuple4<LithosCardOnBoard | undefined>;
  enemyBoard: Tuple4<LithosCardOnBoard | undefined>;
}
