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
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
const initialValues = {
  name: '',
  email: '',
  password: '',
  userRoles: [],
};
const RegisterNewAdmin = () => {
  const { register } = useAuthStore();
  const error = useAuthStore(state => state.error);
  const loading = useAuthStore(state => state.loading);
  const navigate = useNavigate();
  const onSubmit = async values => {
    try {
      const response = await register(values);

      if (response?.status === 201) {
        toast.success('Новий адмін доданий  успішно ');
        navigate('/admin');
      }
      if (!response?.status && error) {
        toast.error(`Помилка  ${error?.response.data.message}`);
      }
    } catch (error) {
      toast.error(`Помилка  ${error?.response.data.message}`);
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.layout}>
        <h2>Реєстрація </h2>
        {!loading ? (
          <Formik
            initialValues={initialValues}
            validationSchema={registerValidationSchema}
            onSubmit={onSubmit}
          >
            {formik => {
              return (
                <Form>
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
                            name="userRoles"
                            id="userRoles"
                            component={CheckBoxInput}
                            label={option.label}
                            value={option.value}
                          />
                        ))}
                        <div>
                          {formik.errors?.roles && (
                            <p className="errorMessage">
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
