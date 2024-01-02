import styles from './LoginPage.module.scss';
import ButtonSubmit from '../SubmitButton/ButtonSubmit';
import TextInput from '@/pages/admin-pages/formik/TextInput/TextInput';
import { Field, Form, Formik } from 'formik';
import PasswordInput from '@/pages/admin-pages/formik/PasswordInput/PasswordInput';
import { Link, Navigate } from 'react-router-dom';
import useAuthStore from '@/store/authStore';
import Spinner from '@/ui/Spinner/Spinner';
import { useAuthorized } from '@/store/IsAuthorizedStore';

const initialValues = {
  email: '',
  password: '',
};
const LoginPage = () => {
  const { setIsAuthorized } = useAuthorized();
  const { login } = useAuthStore();
  const isAuthorized = useAuthorized(state => state.isAuthorized);
  const loginError = useAuthStore(state => state.loginError);

  const loading = useAuthStore(state => state.loading);
  if (isAuthorized) return <Navigate to="/admin" />;
  const checkToken = key => {
    // Get the value of the key from local storage
    const value = localStorage.getItem(key);
    // Check if the value is not null
    const exists = value !== null;
    // If the key exists, remove it
    if (exists) {
      setIsAuthorized();
    }
  };

  const onSubmit = async values => {
    console.log('values: ', values);
    await login(values);

    checkToken('family_coach_access_token');
  };
  return (
    <section>
      <div className={styles.contentWrapper}>
        {!loading ? (
          <Formik
            initialValues={initialValues}
            //   validationSchema={blogPostValidation}
            onSubmit={onSubmit}
          >
            {formik => {
              return (
                <Form>
                  <div className={styles.layout}>
                    <h2>Увійти в акаунт</h2>

                    <div className={styles.formWrapper}>
                      <div className={styles.errorText}>
                        {loginError && (
                          <p>{loginError.response.data.message}</p>
                        )}
                      </div>
                      <div className={styles.inputWrapper}>
                        <Field
                          name="email"
                          id="email"
                          component={TextInput}
                          placeholder="aaaa@gmail.com"
                          label="Електронна пошта"
                        />
                        <Field
                          name="password"
                          id="password"
                          component={PasswordInput}
                          label="Пароль"
                        />
                      </div>
                      <Link to="password" className={styles.forgotPassword}>
                        Забули пароль?
                      </Link>
                    </div>

                    <ButtonSubmit
                      type="submit"
                      nameButton="Увійти"
                      isActive={formik.isValid}
                      handlClick={formik.handleSubmit}
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>
        ) : (
          <Spinner />
        )}
      </div>
    </section>
  );
};

export default LoginPage;
