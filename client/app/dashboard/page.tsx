'use client';

import styles from './dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <section className={styles.section}>
          <h2>プロジェクト一覧</h2>
          <ul>
            <li>プロジェクト 1</li>
            <li>プロジェクト 2</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>タスクの進捗</h2>
          <ul>
            <li>タスク 1（進行中）</li>
            <li>タスク 2（完了）</li>
          </ul>
        </section>
      </div>

      <div className={styles.rightColumn}>
        <section className={styles.section}>
          <h2>最近の更新</h2>
          <ul>
            <li>タスク 1（進行中）</li>
            <li>タスク 2（完了）</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
