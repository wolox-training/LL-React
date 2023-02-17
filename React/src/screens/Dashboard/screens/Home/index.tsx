import { useForm } from 'react-hook-form';

import { UserData } from 'interfaces/userData';

import LogoWolox from '../../../../resources/img/logoWolox.png';

import styles from './styles.module.scss';
import { withContextProvider } from './context';

function Home() {
  const { register, handleSubmit } = useForm<UserData>();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginContainer}>
        <img src={LogoWolox} alt="Wolox Logo Image" />
        <form
          onSubmit={handleSubmit((data) => console.log({ users: data }))}
          className={styles.inputsContainer}
        >
          <h2 className={styles.dataTitle}>Nombre</h2>
          <input {...register('name')} className={styles.dataInput} type="text" />

          <h2 className={styles.dataTitle}>Apellido</h2>
          <input {...register('lastName')} className={styles.dataInput} type="text" />

          <h2 className={styles.dataTitle}>Email</h2>
          <input {...register('email')} className={styles.dataInput} type="text" />

          <h2 className={styles.dataTitle}>Password</h2>
          <input {...register('password')} className={styles.dataInput} type="password" />

          <h2 className={styles.dataTitle}>Confirmación De Password</h2>
          <input {...register('passwordConfirmation')} className={styles.dataInput} type="password" />

          <button type="submit" className={styles.loginButton}>
            <p className={styles.loginTitle}>Login</p>
          </button>
          <div className={styles.line} />
          <button type="submit" className={styles.signUpButton}>
            <p className={styles.signUpTitle}>Sign up</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default withContextProvider(Home);
