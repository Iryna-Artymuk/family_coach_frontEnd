import FormData from 'form-data';
import { Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import FileInput from '../formik/FileInput/FileInput';
import TextInput from '../formik/TextInput/TextInput';
import Spinner from '@/ui/Spinner/Spinner';
import TextEditor from '../formik/TextEditor/TextEditor';
import TextArea from '../formik/TextArea/TextArea';
import SelectInput from '../formik/SelectInput/SelectInput';
import ButtonSubmit from '@/components/admin/SubmitButton/ButtonSubmit';

import { useIsLoading } from '@/store/loadingStore';
import useBlogStore from '@/store/blogStore';
import styles from './BlogAdmin.module.scss';
import { blogPostValidation } from './schemas/addPostValidationSchema';
const initialValues = {
  postImage: [],
  category: '',
  title: '',
  description: '',
  postCategory: '',
};

const AddBlogPost = () => {
  const { addPost, error } = useBlogStore();
  const { isLoading, setIsLoading, setLoaded } = useIsLoading();
  console.log('isLoading: ', isLoading);
  const onSubmit = async values => {
    const formData = new FormData();
    formData.append('postImage', values?.postImage[0]);
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('post', values.post);
    formData.append('postCategory', values.postCategory);

    try {
      setIsLoading();
      const result = await addPost(formData);
      if (result?.status === 'success') {
        toast.success('Пост доданий успішно ');
      }
      if (result?.status === 'error' || error) {
        toast.error(`Помилка  ${result.message}`);
      }
      setLoaded();
    } catch (error) {
      setLoaded();
      console.log(error);
    }
  };

  return (
    <>
      {error && <p> {error.message}</p>}
      {!isLoading ? (
        <Formik
          initialValues={initialValues}
          validationSchema={blogPostValidation}
          onSubmit={onSubmit}
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
                    />
                    <div className={styles.inputsWrapper}>
                      <Field
                        name="postCategory"
                        id="postCategory"
                        component={SelectInput}
                        label="Категорія"
                      />
                      <Field
                        name="title"
                        id="title"
                        placeholder="title"
                        component={TextInput}
                        maxLength={50}
                        showCharacterCount={true}
                        label="Заголовок"
                      />
                      <Field
                        name="description"
                        id="description"
                        placeholder="description"
                        component={TextArea}
                        maxLength={300}
                        showCharacterCount={true}
                        label="короткий опис"
                      />
                    </div>
                  </div>

                  <Field
                    name="post"
                    id="post"
                    component={TextEditor}
                    label="Стаття"
                  />

                  <ButtonSubmit
                    type="submit"
                    nameButton="Опублікувати"
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

export default AddBlogPost;
