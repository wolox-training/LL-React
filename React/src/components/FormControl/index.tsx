import { useForm } from 'react-hook-form';

import { RegisterUser } from 'interfaces/RegisterUser';

import styles from './styles.module.scss';

export function FormControl() {
  const { register, handleSubmit } = useForm<RegisterUser>();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.authContainer}>
        <form
          onSubmit={handleSubmit((data) => {
            console.log({ user: data });
          })}
          className={styles.inputsContainer}
        >
          <label className={styles.dataTitle}>Nombre</label>
          <input {...register('name')} className={styles.dataInput} type="text" />

          <label className={styles.dataTitle}>Apellido</label>
          <input {...register('lastName')} className={styles.dataInput} type="text" />

          <label className={styles.dataTitle}>Email</label>
          <input {...register('email')} className={styles.dataInput} type="email" />

          <label className={styles.dataTitle}>Password</label>
          <input {...register('password')} className={styles.dataInput} type="password" />

          <label className={styles.dataTitle}>Confirmación De Password</label>
          <input {...register('passwordConfirmation')} className={styles.dataInput} type="password" />

          <button type="submit" className={styles.loginButton}>
            Login
          </button>
          <div className={styles.line} />
          <button type="submit" className={styles.signUpButton}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormControl;
