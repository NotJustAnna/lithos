import styles from './index.module.scss';

export interface HealthBarProps {
  health: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;
}

function healthToStyle(health: number) {
  if (health === 0) {
    return 'value-0';
  } else if (health < 0) {
    return `value-neg-${-health}`
  } else {
    return `value-pos-${health}`
  }
}

export default function HealthBar(props: HealthBarProps) {
  return <>
    <div className={styles.title}>HEALTH</div>
    <div className={styles.bar}>
      <div className={styles[healthToStyle(props.health)]}>

      </div>
    </div>
  </>;
}
