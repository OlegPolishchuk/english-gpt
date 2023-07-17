import styles from 'src/app/styles/page.module.css';
import { Chat } from '@/modules';

export default function Home() {
  return (
    <main className={styles.main}>
      <Chat />
    </main>
  );
}
