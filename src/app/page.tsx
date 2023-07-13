import styles from 'src/app/styles/page.module.css';
import { Chat } from '@/components';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={'messages'}></div>

      <Chat />
    </main>
  );
}
