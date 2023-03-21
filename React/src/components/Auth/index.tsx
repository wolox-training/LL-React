import { ReactNode } from 'react';

import LogoWolox from 'resources/img/logoWolox.png';

import styles from './styles.module.scss';

interface AuthProps {
  children: ReactNode;
}

export function AuthContainer({ children }: AuthProps) {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.authContainer}>
        <img src={LogoWolox} className={styles.woloxLogo} alt="Wolox Logo" />
        {children}
      </div>
    </div>
  );
}
