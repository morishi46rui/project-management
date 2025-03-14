'use client';

import type { ReactNode } from 'react';
import { Suspense } from 'react';
import Banner from '../components/banner/Banner';
import styles from './template.module.css';

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <Banner />
      <div className={styles.padding} />
      <Suspense>
        <main className={styles.main}>{children}</main>
      </Suspense>
    </>
  );
}
