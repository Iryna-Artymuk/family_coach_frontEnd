import FormData from 'form-data';
import ButtonSubmit from '@/components/admin/SubmitButton/ButtonSubmit';
import { useIsLoading } from '@/store/loadingStore';
import Spinner from '@/ui/Spinner/Spinner';
import { Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import FileInput from '../formik/FileInput/FileInput';
import TextInput from '../formik/TextInput/TextInput';
import useBlogStore from '@/store/blogStore';
import TextArea from '../formik/TextArea/TextArea';
import TextEditor from '../formik/TextEditor/TextEditor';
import styles from './BlogAdmin.module.scss';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePostValidation } from './updateValidationSchema';
const initialValues = {
  сategory: '',
  title: '',
  description: '',
  post: '',
};
const imageinitialValues = {
  postImage: [],
};

const EditBlogPost = () => {
  const { getPostById, updatePostText, updatePostImage } = useBlogStore();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const { isLoading, setIsLoading, setLoaded } = useIsLoading();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading();
        const result = await getPostById(id);

        setPost(result);
        setLoaded();
      } catch (error) {
        setLoaded();
        console.log(error);
      }
    };
    fetchData();
  }, [getPostById, id, setPost, setIsLoading, setLoaded]);
  const onSubmit = async values => {
    try {
      setIsLoading();
      const result = await updatePostText(values, id);
      if (result.status === 'success') {
        setLoaded();
        toast.success('Пост оновлений успішно ');
        navigate('/admin/blog');
      }
      if (result.status === 'error') {
        setLoaded();
        toast.error(`Помилка  ${result.message}`);
      }
    } catch (error) {
      setLoaded();
      toast.error(`Помилка  ${error.message}`);
      console.log(error);
    }
    return;
  };
  const onImageSubmit = async values => {
    console.log('values: ', values);
    const formData = new FormData();

    formData.append('postImage', values.postImage[0]);

    try {
      setIsLoading();
      const result = await updatePostImage(formData, id);
      if (result.status === 'success') {
        setLoaded();
        toast.success(' Зображення оновлено успішно ');
        navigate('/admin/blog');
      }
      if (result.status === 'error') {
        setLoaded();
        toast.error(`Помилка  ${result.message} служба підтримки 0666796604`);
      }
    } catch (error) {
      setLoaded();
      toast.error(`Помилка  ${error.message}`);
      console.log(error);
    }
    return;
  };

  return (
    <>
      <>
        {!isLoading ? (
          <Formik
            initialValues={imageinitialValues}
            // validationSchema={blogPostImageValidation}
            onSubmit={onImageSubmit}
          >
            {formik => {
              return (
                <Form>
                  <div className={styles.layout}>
                    <div className={styles.wrapper}>
                      <Field
                        name="postImage"
                        id="postImage"
                        type="file"
                        component={FileInput}
                        photo={post.postImage?.url}
                      />
                    </div>

                    <ButtonSubmit
                      type="submit"
                      nameButton="Оновити зображення "
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
      </>

      {!isLoading ? (
        <Formik
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
                        name="сategory"
                        id="сategory"
                        placeholder="category"
                        component={TextInput}
                        maxLength={50}
                        showCharacterCount={true}
                        label="Категорія"
                        text={post?.сategory}
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
                        label="короткий опис"
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
        </Formik>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default EditBlogPost;
