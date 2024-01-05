import { Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

import ButtonSubmit from '@/components/admin/SubmitButton/ButtonSubmit';
import TextInput from '../formik/TextInput/TextInput';
import PasswordInput from '../formik/PasswordInput/PasswordInput';

import styles from './ChangePassword.module.scss';
const innitialValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const ChangePassword = () => {
  const onSubmit = async values => {
    console.log('values: ', values);
  };

  return (
    <>
      <Formik
        initialValues={innitialValues}
        // validationSchema={updatePostValidation}
        onSubmit={onSubmit}
      >
        {formik => {
          return (
            <Form>
              <div className={styles.contentWrapper}>
                <Field
                  name="oldPassword"
                  id="oldPassword"
                  component={TextInput}
                  label="Старий пароль"
                />
                <Field
                  name="newPassword"
                  id="newPassword"
                  component={PasswordInput}
                  label="Новий пароль"
                />
                <Field
                  name="confirmPassword"
                  id="confirmPassword"
                  component={PasswordInput}
                  label="Повторити новий  пароль"
                />
                <ButtonSubmit
                  type="submit"
                  nameButton="Змінити пароль"
                  isActive={formik.isValid}
                  handlClick={formik.handleSubmit}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ChangePassword;
