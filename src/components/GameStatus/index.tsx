import styles from './index.module.scss';

const allStatus = {
  draw_either: ["Draw a squirrel or a card.", "Choose wisely."],
  draw_squirrel: ["Draw a squirrel.", "You're out of cards."],
  draw_card: ["Draw a card.", "You're out of squirrels."],
  place_cards: ["It is your turn.", "Skip to the attack phase when done."],
  attack_phase: ["Your cards are attacking.", "May the odds be in your favor."],
  enemy_turn: ["It is your enemy's turn", "Wait until they're done."],
  enemy_attack: ["The enemy's cards are attacking.", "May the odds be in your favor."]
};

export interface GameStatusProps {
  status: keyof typeof allStatus;
}

export default function GameStatus(props: GameStatusProps) {
  const [title, subtitle] = allStatus[props.status];
  return <div className={styles.gameStatus}>
    <div className={styles.title}>{title}</div>
    <div className={styles.subtitle}>{subtitle}</div>
  </div>;
}
