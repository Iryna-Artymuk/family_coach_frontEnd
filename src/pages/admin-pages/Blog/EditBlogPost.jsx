import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormData from 'form-data';
import { Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';

import FileInput from '../formik/FileInput/FileInput';
import TextInput from '../formik/TextInput/TextInput';
import useBlogStore from '@/store/blogStore';

import TextEditor from '../formik/TextEditor/TextEditor';

import TextArea from '../formik/TextArea/TextArea';
import SelectInput from '../formik/SelectInput/SelectInput';
import Spinner from '@/ui/Spinner/Spinner';
import ButtonSubmit from '@/components/admin/SubmitButton/ButtonSubmit';
import styles from './BlogAdmin.module.scss';

import { useIsLoading } from '@/store/loadingStore';
import { updatePostValidation } from './schemas/updateTextValidationSchema';
import { blogPostImageSchema } from './schemas/blogPostImageValidation';

const initialValues = {
  postCategory: '',
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
        console.log('result : ', result);

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
      {!isLoading ? (
        <>
          <Formik
            initialValues={imageinitialValues}
            validationSchema={blogPostImageSchema}
            onSubmit={onImageSubmit}
          >
            {formik => {
              return (
                <Form>
                  <div className={styles.layout}>
                    <Field
                      name="postImage"
                      id="postImage"
                      type="file"
                      component={FileInput}
                      photo={post.postImage?.url}
                    />

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
          </Formik>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default EditBlogPost;
