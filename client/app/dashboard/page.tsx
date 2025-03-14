'use client';

import Accordion from '../../components/accordion/Accordion';
import styles from './dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <Accordion title="プロジェクト一覧">
          <ul>
            <li>プロジェクト 1</li>
            <li>プロジェクト 2</li>
            <li>プロジェクト 3</li>
            <li>プロジェクト 4</li>
            <li>プロジェクト 5</li>
            <li>プロジェクト 6</li>
          </ul>
        </Accordion>

        <Accordion title="タスク一覧">
          <ul>
            <li>タスク 1</li>
            <li>タスク 2</li>
          </ul>
        </Accordion>
      </div>

      <div className={styles.rightColumn}>
        <Accordion title="最近の更新">
          <ul>
            <li>タスク 1（進行中）</li>
            <li>タスク 2（完了）</li>
          </ul>
        </Accordion>
      </div>
    </div>
  );
}
