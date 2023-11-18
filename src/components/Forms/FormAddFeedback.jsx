import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { formatDate } from '@/helpers/formatDate';

import Button from '../Button/Button';

import styles from './Form.module.scss';
export default function AddForm({ handleSubmitForm }) {
  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required('Представтесь будь-ласка'),
    body: Yup.string().required('Залиште ваші враження про мене'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        body: '',
        date: '',
      }}
      onSubmit={async (value, action) => {
        console.log('value,: ', value);
        handleSubmitForm({ ...value, date: formatDate(Date.now()) });

        action.resetForm();
      }}
      validationSchema={ValidationSchema}
    >
      {props => {
        const { handleSubmit } = props;
        return (
          <Form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.formTitle}>
              Щоб додати відгук заповніть форму
            </h2>
            <Field type="text" name="name" placeholder="Ваше імʼя" />
            <ErrorMessage
              className={styles.inputError}
              name="name"
              component="div"
            />

            <Field
              as="textarea"
              name="body"
              placeholder="Залиште свій відгук"
            />
            <ErrorMessage
              className={styles.inputError}
              name="body"
              component="div"
            />

            <Button buttonAddMore type="submit">
              Додати відгук
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}
