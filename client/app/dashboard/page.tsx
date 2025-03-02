'use client';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import styles from './dashboard.module.css';

export default function Dashboard() {
  const [isProjectOpen, setIsProjectOpen] = useState(true);
  const [isTaskOpen, setIsTaskOpen] = useState(true);
  const [isUpdatesOpen, setIsUpdatesOpen] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <section className={styles.section}>
          <h2
            className={styles.accordionTitle}
            onClick={() => setIsProjectOpen(!isProjectOpen)}
            onKeyUp={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsProjectOpen(!isProjectOpen);
              }
            }}
          >
            {isProjectOpen ? (
              <ExpandLessIcon style={{ fontSize: '1.5em' }} />
            ) : (
              <ExpandMoreIcon style={{ fontSize: '1.5em' }} />
            )}
            プロジェクト一覧
          </h2>
          <div className={`${styles.accordionContent} ${isProjectOpen ? styles.open : ''}`}>
            <ul>
              <li>プロジェクト 1</li>
              <li>プロジェクト 2</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2
            className={styles.accordionTitle}
            onClick={() => setIsTaskOpen(!isTaskOpen)}
            onKeyUp={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsTaskOpen(!isTaskOpen);
              }
            }}
          >
            {isTaskOpen ? (
              <ExpandLessIcon style={{ fontSize: '1.5em' }} />
            ) : (
              <ExpandMoreIcon style={{ fontSize: '1.5em' }} />
            )}
            タスク一覧
          </h2>
          <div className={`${styles.accordionContent} ${isTaskOpen ? styles.open : ''}`}>
            <ul>
              <li>タスク 1</li>
              <li>タスク 2</li>
            </ul>
          </div>
        </section>
      </div>

      <div className={styles.rightColumn}>
        <section className={styles.section}>
          <h2
            className={styles.accordionTitle}
            onClick={() => setIsUpdatesOpen(!isUpdatesOpen)}
            onKeyUp={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsUpdatesOpen(!isUpdatesOpen);
              }
            }}
          >
            {isUpdatesOpen ? (
              <ExpandLessIcon style={{ fontSize: '1.5em' }} />
            ) : (
              <ExpandMoreIcon style={{ fontSize: '1.5em' }} />
            )}
            最近の更新
          </h2>
          <div className={`${styles.accordionContent} ${isUpdatesOpen ? styles.open : ''}`}>
            <ul>
              <li>タスク 1（進行中）</li>
              <li>タスク 2（完了）</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
