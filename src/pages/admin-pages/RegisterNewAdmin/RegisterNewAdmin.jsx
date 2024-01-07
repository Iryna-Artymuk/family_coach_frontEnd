import useAuthStore from '@/store/authStore';
import { Field, Form, Formik } from 'formik';
import TextInput from '../formik/TextInput/TextInput';
import PasswordInput from '../formik/PasswordInput/PasswordInput';
import ButtonSubmit from '@/components/admin/SubmitButton/ButtonSubmit';

import styles from './RegisterNewAdmin.module.scss';
import { userRoles } from '@/constants/userRoles';
import { registerValidationSchema } from './registerValidation.js';
import CheckBoxInput from '../formik/CheckBoxInput/CheckBoxInput';
import Spinner from '@/ui/Spinner/Spinner';
const initialValues = {
  name: '',
  email: '',
  password: '',
  roles: [],
};
const RegisterNewAdmin = () => {
  // const { register } = useAuthStore();

  const loading = useAuthStore(state => state.loading);

  const onSubmit = async values => {
    console.log('values: ', values);
    // await login(values);
  };
  return (
    <>
      <div className={styles.layout}>
        {!loading ? (
          <Formik
            initialValues={initialValues}
            validationSchema={registerValidationSchema}
            onSubmit={onSubmit}
          >
            {formik => {
              return (
                <Form>
                  <h2>Реєстрація </h2>

                  <div className={styles.inputWrapper}>
                    <Field
                      name="name"
                      id="name"
                      component={TextInput}
                      placeholder="введіть ім'я"
                      label="Ім'я"
                    />
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
                    <div className={styles.checkBoxWrapper}>
                      <p>Посада</p>
                      <div>
                        {userRoles.map(option => (
                          <Field
                            key={option.key}
                            name="roles"
                            id="roles"
                            component={CheckBoxInput}
                            label={option.label}
                            value={option.value}
                          />
                        ))}
                        <div className={styles.errorWrap}>
                          {formik.errors?.roles && (
                            <p className={styles.errorMessage}>
                              {formik.errors?.roles}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <ButtonSubmit
                      type="submit"
                      nameButton="Зареєструвати"
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
    </>
  );
};

export default RegisterNewAdmin;
