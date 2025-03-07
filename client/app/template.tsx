'use client';

import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { pagesPath } from 'utils/$path';
import styles from './template.module.css';

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={styles.userBanner}>
        <div>
          <Link href={pagesPath.dashboard.$url()} className={styles.nav}>
            <HomeIcon />
          </Link>
          <Link href={pagesPath.dashboard.$url()} className={styles.nav}>
            ダッシュボード
          </Link>
          <Link href={pagesPath.projects.$url()} className={styles.nav}>
            プロジェクト
          </Link>
          <Link href={pagesPath.tasks.$url()} className={styles.nav}>
            タスク
          </Link>
        </div>
      </div>
      <div className={styles.padding} />
      <Suspense>
        <main className={styles.main}>{children}</main>
      </Suspense>
    </>
  );
}
