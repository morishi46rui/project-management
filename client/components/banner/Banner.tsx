'use client';

import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import UserIcon from '@mui/icons-material/Person';
import SettingIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import { pagesPath } from 'utils/$path';
import styles from './banner.module.css';

export default function Banner() {
  return (
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
      <div>
        <Link href={pagesPath.user.$url()} className={styles.nav}>
          <UserIcon />
        </Link>
        <Link href={pagesPath.settings.$url()} className={styles.nav}>
          <SettingIcon />
        </Link>
        <Link href={'/'} className={styles.nav}>
          <LogoutIcon />
        </Link>
      </div>
    </div>
  );
}
