import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { formatDate } from '@/services/formatDate';

import Button from '../Button/Button';

import styles from './Form.module.scss';
export default function AddForm({ closeModal, isSubmitted, setIsSubmitted }) {
  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is  required'),
    body: Yup.string().required('Text is  required'),
  });

  const handleSubmit = value => {
    console.log(value);

    // dispatch(addContact(value));

    closeModal();
    setIsSubmitted(!isSubmitted);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        body: '',
        date: '',
      }}
      onSubmit={(value, action) => {
        handleSubmit({ ...value, date: formatDate(Date.now()) });

        action.resetForm();
      }}
      validationSchema={ValidationSchema}
    >
      <Form className={styles.form}>
        <h2 className={styles.formTitle}>Щоб додати відгук заповніть форму </h2>
        <Field
          // className={css.input}
          type="text"
          name="name"
          placeholder="Ваше імʼя"
          autoFocus
        />

        <ErrorMessage
          // className={css.error}
          name="name"
          component="div"
        />

        <Field
          // className={css.input}
          as="textarea"
          name="body"
          placeholder="Enter feedback"
        />

        <ErrorMessage
          //   className={css.error}
          name="body"
          component="div"
        />
        <Button buttonAddMore type="submit">
          Додати відгук
        </Button>
      </Form>
    </Formik>
  );
}
