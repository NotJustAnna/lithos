import styles from './index.module.scss';
import { ReactNode } from 'react';

export interface StatusProps {
  side: 'left' | 'right';
  title: string;
  children?: ReactNode;
}

export default function Sidebar(props: StatusProps) {
  return <div className={styles.sidebar}>
    <div className={props.side === 'left' ? styles.titleLeft : styles.titleRight}>{props.title}</div>
    <hr/>
    <div className={props.side === 'left' ? styles.contentLeft : styles.contentRight}>{props.children}</div>
  </div>;
}
