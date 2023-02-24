import LogoWolox from 'resources/img/logoWolox.png';

import styles from './styles.module.scss';

export function AuthContainer({ children }: any) {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginContainer}>
        <img src={LogoWolox} className={styles.woloxLogo} alt="Wolox Logo" />
        {children}
      </div>
    </div>
  );
}
