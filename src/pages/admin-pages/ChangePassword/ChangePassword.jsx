import { Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';

import ButtonSubmit from '@/components/admin/SubmitButton/ButtonSubmit';
import TextInput from '../formik/TextInput/TextInput';
import PasswordInput from '../formik/PasswordInput/PasswordInput';

import styles from './ChangePassword.module.scss';
import { passwordValidation } from './passwordValidationSchema';
import useAuthStore from '@/store/authStore';
const innitialValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const ChangePassword = () => {
  const { changePassword } = useAuthStore();
  const currentUser = useAuthStore(state => state.currentUser);
  const error = useAuthStore(state => state.error);
  // console.log(' error : ', error?.response.data.message);
  const PasswordSubmit = async values => {
    try {
      const response = await changePassword(values, currentUser.id);

      if (response?.status === 200) {
        toast.success('Пароль оновлено успішно ');
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
      <Formik
        initialValues={innitialValues}
        validationSchema={passwordValidation}
        onSubmit={PasswordSubmit}
      >
        {formik => {
          return (
            <Form>
              <div className={styles.contentWrapper}>
                <div className={styles.inputWrapper}>
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
                </div>

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
