import { useEffect, useState } from 'react';

import sprite from '@/assets/icons/sprite-admin.svg';

import { useIsLoading } from '@/store/loadingStore';
import useQualificatioStore from '@/store/qualificatioStore';

import styles from './QualificationAdmin.module.scss';
import Spinner from '@/ui/Spinner/Spinner';

import { Field, Form, Formik } from 'formik';
import FileInput from '../formik/FileInput/FileInput';
import { diplomaImageValidation } from './validationSchema.js';
import ButtonSubmit from '@/components/admin/SubmitButton/ButtonSubmit';

const initialValues = {
  image: [],
};
const QualificationAdmin = () => {
  const { getDiplomas, deleteDiplomayId, addDiploma } = useQualificatioStore();
  const [diplomas, setDiplomas] = useState();
  console.log('diplomas: ', diplomas);
  const { isLoading, setIsLoading, setLoaded } = useIsLoading();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDiplomas();
        setDiplomas(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [getDiplomas, setIsLoading, setLoaded]);

  const handelDelete = async id => {
    try {
      setIsLoading();
      const result = await deleteDiplomayId(id);
      console.log('result: ', result);
      if (result) {
        const deletedDiploma = diplomas.find(diploma => diploma._id === id);
        const newDiplomasArr = diplomas.filter(
          diploma => diploma._id !== deletedDiploma._id
        );
        setDiplomas(newDiplomasArr);
        setLoaded();
      } else {
        setLoaded();
        return;
      }
    } catch (error) {
      console.log(error);
      setLoaded();
    }
  };

  const onSubmit = async values => {
    const formData = new FormData();
    console.log(values.image[0]);
    formData.append('file', values.image[0], 'diplomaImg');
    try {
      setIsLoading();
      await addDiploma(formData);
      setLoaded();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.list}>
      {!isLoading ? (
        <ul className={styles.list}>
          <li className={styles.listItemAdd}>
            <Formik
              initialValues={initialValues}
              validationSchema={diplomaImageValidation}
              onSubmit={onSubmit}
            >
              {formik => {
                return (
                  <Form>
                    <button className={styles.button} type="submit">
                      Додати диплом
                    </button>

                    <div className={styles.layout}>
                      <Field
                        name="image"
                        id="image"
                        type="file"
                        component={FileInput}
                      />
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </li>
          {diplomas?.map(diploma => (
            <div key={diploma._id} className={styles.listItem}>
              <img src={diploma?.image.url} alt="" />
              <div
                className={styles.deleteIcon}
                onClick={() => handelDelete(diploma._id)}
              >
                <svg>
                  <use href={`${sprite}#${'icon-delete'}`} />
                </svg>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default QualificationAdmin;
