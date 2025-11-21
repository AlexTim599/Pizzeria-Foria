import { FC } from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: FC = () => {
  return (
    <div className={styles.root}>
      <h2>Ничего не неайдено</h2> <p className={styles.discription}>Такой страницы не существует</p>
    </div>
  );
};
export default NotFoundBlock;
