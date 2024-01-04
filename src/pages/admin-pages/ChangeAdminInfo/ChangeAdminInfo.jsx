import { Field, Form, Formik } from 'formik';
import styles from './ChangeAdminInfo.module.scss';
import Spinner from '@/ui/Spinner/Spinner';
import FileInput from '../formik/FileInput/FileInput';
import useAuthStore from '@/store/authStore';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import ButtonSubmit from '@/components/admin/SubmitButton/ButtonSubmit';
// const initialValues = {
//   postCategory: '',
//   title: '',
//   description: '',
//   post: '',
// };
const avatarInitialValues = {
  avatar: [],
};
const ChangeAdminInfo = () => {
  const { changeAvatar } = useAuthStore();
  const currentUser = useAuthStore(state => state.currentUser);
  const loading = useAuthStore(state => state.loading);
  const error = useAuthStore(state => state.error);
  console.log('error: ', error);

  //   const onSubmit = async values => {
  //     try {
  //       setIsLoading();
  //       const result = await updatePostText(values, id);
  //       if (result.status === 'success') {
  //         setLoaded();
  //         toast.success('Пост оновлений успішно ');
  //         navigate('/admin/blog');
  //       }
  //       if (result.status === 'error') {
  //         setLoaded();
  //         toast.error(`Помилка  ${result.message}`);
  //       }
  //     } catch (error) {
  //       setLoaded();
  //       toast.error(`Помилка  ${error.message}`);
  //       console.log(error);
  //     }
  //     return;
  //   };
  const onImageSubmit = async values => {
    console.log('values: ', values);
    const formData = new FormData();

    formData.append('avatar', values.avatar[0]);

    try {
      const result = await changeAvatar(formData, currentUser.id);
      console.log('result: ', result);
      if (result.status === 200) {
        toast.success('Аватар оновлено успішно ');
      }
    } catch (error) {
      toast.error(`Помилка  ${error}`);
      console.log(error);
    }
    return;
  };
  return (
    <>
      {!loading ? (
        <>
          <Formik
            initialValues={avatarInitialValues}
            // validationSchema={blogPostImageValidation}
            onSubmit={onImageSubmit}
          >
            {formik => {
              return (
                <Form>
                  <div className={styles.layout}>
                    <Field
                      name="avatar"
                      id="avatar"
                      type="file"
                      component={FileInput}
                      photo={currentUser.avatar?.url}
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

          {/* <Formik
            initialValues={initialValues}
            validationSchema={updatePostValidation}
            onSubmit={onSubmit}
          >
            {formik => {
              return (
                <Form>
                  <div className={styles.layout}>
                    <div className={styles.wrapper}>
                      <div className={styles.inputsWrapper}>
                        <Field
                          name="postCategory"
                          id="postCategory"
                          component={SelectInput}
                          label="Категорія"
                          text={post?.postCategory}
                        />
                        <Field
                          name="title"
                          id="title"
                          placeholder="title"
                          component={TextInput}
                          maxLength={50}
                          showCharacterCount={true}
                          label="Заголовок"
                          text={post?.title}
                        />
                        <Field
                          name="description"
                          id="description"
                          placeholder="description"
                          component={TextArea}
                          maxLength={300}
                          showCharacterCount={true}
                          label="Опис"
                          text={post?.description}
                        />
                      </div>
                    </div>

                    <Field
                      name="post"
                      id="post"
                      component={TextEditor}
                      label="Стаття"
                      text={post?.post}
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
          </Formik> */}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ChangeAdminInfo;
