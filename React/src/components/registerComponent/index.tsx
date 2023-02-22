import { useForm } from 'react-hook-form';

import { RegisterUser } from 'interfaces/RegisterUser';
import { WoloxLogo } from 'components/WoloxLogo';

import styles from './styles.module.scss';
import { withContextProvider } from './context';

export function Home() {
  const { register, handleSubmit } = useForm<RegisterUser>();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginContainer}>
        <WoloxLogo />
        <form
          onSubmit={handleSubmit((data) => console.log({ users: data }))}
          className={styles.inputsContainer}
        >
          <h2 className={styles.dataTitle}>Nombre</h2>
          <input {...register('name')} className={styles.dataInput} type="text" />

          <h2 className={styles.dataTitle}>Apellido</h2>
          <input {...register('lastName')} className={styles.dataInput} type="text" />

          <h2 className={styles.dataTitle}>Email</h2>
          <input {...register('email')} className={styles.dataInput} type="email" />

          <h2 className={styles.dataTitle}>Password</h2>
          <input {...register('password')} className={styles.dataInput} type="password" />

          <h2 className={styles.dataTitle}>Confirmación De Password</h2>
          <input {...register('passwordConfirmation')} className={styles.dataInput} type="password" />

          <button type="submit" className={styles.loginButton}>
            <h4 className={styles.loginTitle}>Login</h4>
          </button>
          <div className={styles.line} />
          <button type="submit" className={styles.signUpButton}>
            <h4 className={styles.signUpTitle}>Sign up</h4>
          </button>
        </form>
      </div>
    </div>
  );
}

export default withContextProvider(Home);
