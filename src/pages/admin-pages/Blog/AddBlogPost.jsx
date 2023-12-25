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
import { blogPostValidation } from './validationSchema';
const initialValues = {
  postImage: [],
  category: 'Відносини',
  title: '',
  description: '',
  post: '',
};

const AddBlogPost = () => {
  const { addPost } = useBlogStore();
  const { isLoading, setIsLoading, setLoaded } = useIsLoading();
  const onSubmit = async values => {
    const formData = new FormData();
    formData.append('postImage', values?.postImage[0]);
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('post', values.post);
    formData.append('category', values.category);

    try {
      setIsLoading();
      const result = await addPost(formData);
      if (result.status === 'success') {
        toast.success('Пост доданий успішно ');
      }
      if (result.status === 'error') {
        toast.error(`Помилка  ${result.message}`);
      }
      setLoaded();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!isLoading ? (
        <Formik
          initialValues={initialValues}
          //validationSchema={blogPostValidation}
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
                        name="category"
                        id="category"
                        placeholder="category"
                        component={TextInput}
                        maxLength={50}
                        showCharacterCount={true}
                        label="Катеорія"
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
