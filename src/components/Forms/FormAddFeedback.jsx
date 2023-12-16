import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../main/Button/Button';
import styles from './Form.module.scss';
import { useIsLoading } from '@/store/loadingStore';
import useFeedbackStore from '@/store/feedbackStore';
import { toast } from 'react-toastify';

const initialValues = {
  name: '',
  feedback: '',
};
const ValidationSchema = Yup.object().shape({
  name: Yup.string().required('Представтесь будь-ласка'),
  feedback: Yup.string().required('Залиште ваші враження про мене'),
});
export default function AddForm({ setIsSubmitted, isSubmitted, closeModal }) {
  const { addFeedback } = useFeedbackStore();
  const { setIsLoading, setLoaded } = useIsLoading();
  const onSubmit = async (value, action) => {
    try {
      setIsLoading();
      const result = await addFeedback(value);

      if (result.status === 'success') {
        toast.success(
          `${result.data.name}, ваш відгук відправлено на розгляд `
        );
        setLoaded();
        closeModal();
        setIsSubmitted(!isSubmitted);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 2000);
      } else if (result.status === 'error') {
        closeModal();
        toast.error(
          `нажаль не вдалось додати ваш відгук , спробуйте пізніше  `
        );
      }
    } catch (error) {
      toast.error(`${error.message} `);
      console.log(error);
    } finally {
      setLoaded();
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        <h2 className={styles.formTitle}>Щоб додати відгук заповніть форму</h2>
        <Field type="text" name="name" placeholder="Ваше імʼя" />
        <ErrorMessage
          className={styles.inputError}
          name="  name"
          component="div"
        />

        <Field
          as="textarea"
          name="feedback"
          placeholder="Залиште свій відгук"
        />
        <ErrorMessage
          className={styles.inputError}
          name="feedback"
          component="div"
        />
        <button type="submit">Додати відгук</button>
      </Form>
    </Formik>
  );
}
