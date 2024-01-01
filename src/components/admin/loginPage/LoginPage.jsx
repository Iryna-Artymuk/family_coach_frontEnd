import Container from '@/components/main/Container/Container';
import styles from './LoginPage.module.scss';
const LoginPage = () => {
  return (
    <section>
      <Container>
        <div className={styles.contentWrapper}>
          <h1 className={styles.text}>
            спочатку треба авторизуватись сторінка знаходиться в розробці, якщо
            вам треба доступ, технічна підтримка 0666796604
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default LoginPage;
