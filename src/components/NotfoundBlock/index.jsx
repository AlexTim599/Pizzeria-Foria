import styles from './NotFoundBlock.module.scss';

export default function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h2>Ничего не неайдено</h2> <p className={styles.discription}>Такой страницы не существует</p>
    </div>
  );
}
