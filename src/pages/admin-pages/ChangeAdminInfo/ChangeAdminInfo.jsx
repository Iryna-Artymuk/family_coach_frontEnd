import { Field, Form, Formik } from 'formik';
import styles from './ChangeAdminInfo.module.scss';
import Spinner from '@/ui/Spinner/Spinner';
import FileInput from '../formik/FileInput/FileInput';
import useAuthStore from '@/store/authStore';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import ButtonSubmit from '@/components/admin/SubmitButton/ButtonSubmit';
import TextInput from '../formik/TextInput/TextInput';
import ChangePassword from '../ChangePassword/ChangePassword';
import { updateUserInfoSchema } from './updateUserInfoSchema';
import { avatarImageValidationSchema } from './avatarImageValidationSchema';

const userInitialValues = {
  name: '',
};
const avatarInitialValues = {
  avatar: [],
};
const ChangeAdminInfo = () => {
  const { changeAvatar, changeInfo } = useAuthStore();
  const currentUser = useAuthStore(state => state.currentUser);
  const loading = useAuthStore(state => state.loading);
  const error = useAuthStore(state => state.error);
  console.log('error: ', error);

  const onSubmit = async values => {
    try {
      console.log('values: ', values);
      changeInfo(values, currentUser.id);
    } catch (error) {
      console.log('error : ', error);
    }
  };
  const onImageSubmit = async values => {
    // console.log(' values: ', values);
    const formData = new FormData();
    formData.append('avatar', values.avatar[0]);

    try {
      const response = await changeAvatar(formData, currentUser.id);
      console.log('response: ', response);

      if (response.status === 200) {
        toast.success('Аватар оновлено успішно ');
      }
      if (!response && error) {
        toast.error(`Помилка  ${error?.response.data.message}`);
      }
    } catch (error) {
      // toast.error(`Помилка  ${error}`);
      console.log(error);
    }
    return;
  };
  return (
    <div className={styles.layout}>
      {!loading ? (
        <>
          <Formik
            initialValues={avatarInitialValues}
            validationSchema={avatarImageValidationSchema}
            onSubmit={onImageSubmit}
          >
            {formik => {
              return (
                <Form>
                  <div className={styles.contentWrapper}>
                    <Field
                      name="avatar"
                      id="avatar"
                      type="file"
                      component={FileInput}
                      // photo={currentUser.avatar?.url}
                    />

                    <ButtonSubmit
                      type="submit"
                      nameButton="Оновити аватар "
                      isActive={formik.isValid}
                      handlClick={formik.handleSubmit}
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>

          <Formik
            initialValues={userInitialValues}
            validationSchema={updateUserInfoSchema}
            onSubmit={onSubmit}
          >
            {formik => {
              return (
                <Form>
                  <div className={styles.contentWrapper}>
                    <Field
                      name="name"
                      id="name"
                      component={TextInput}
                      label="Ім'я"
                      text={currentUser?.name}
                    />
                    <ButtonSubmit
                      type="submit"
                      nameButton=" Оновити"
                      isActive={formik.isValid}
                      handlClick={formik.handleSubmit}
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>
          <ChangePassword />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ChangeAdminInfo;
