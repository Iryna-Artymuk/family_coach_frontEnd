import styles from './LoginPage.module.scss';
import ButtonSubmit from '../SubmitButton/ButtonSubmit';
import TextInput from '@/pages/admin-pages/formik/TextInput/TextInput';
import { Field, Form, Formik } from 'formik';
import PasswordInput from '@/pages/admin-pages/formik/PasswordInput/PasswordInput';
import { Navigate } from 'react-router-dom';
import useAuthStore from '@/store/authStore';
import Spinner from '@/ui/Spinner/Spinner';
import { useAuthorized } from '@/store/IsAuthorizedStore';
import { loginValidationSchema } from './loginValidation';
import { useEffect } from 'react';

const initialValues = {
  email: '',
  password: '',
};
const LoginPage = () => {
  const { setIsAuthorized } = useAuthorized();
  const { login } = useAuthStore();
  const isAuthorized = useAuthorized(state => state.isAuthorized);
  const loginError = useAuthStore(state => state.loginError);
  const { getCurrentUser } = useAuthStore();
  const loading = useAuthStore(state => state.loading);
  const currentUser = useAuthStore(state => state.currentUser);
  const existUser = Object.keys(currentUser).length > 0;
  useEffect(() => {
    try {
      getCurrentUser();
    } catch (error) {
      console.log(error);
    }
  }, [getCurrentUser]);
  if (isAuthorized && existUser) return <Navigate to="/admin" />;
  console.log('isAuthorized: ', isAuthorized);
  console.log('existUser: ', existUser);
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
    await login(values);

    checkToken('family_coach_access_token');
  };
  return (
    <section>
      <div className={styles.contentWrapper}>
        {!loading ? (
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
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
                      {/* <Link to="password" className={styles.forgotPassword}>
                        Забули пароль?
                      </Link> */}
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
