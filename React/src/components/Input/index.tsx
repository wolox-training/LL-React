import { useForm } from 'react-hook-form';

import { RegisterUser } from 'interfaces/RegisterUser';

import styles from './styles.module.scss';

export function Input() {
  const { register, handleSubmit } = useForm<RegisterUser>();
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log({ user: data });
        })}
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
      </form>
    </div>
  );
}
