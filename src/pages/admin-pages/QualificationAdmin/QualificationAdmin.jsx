import { useEffect, useState } from 'react';

import { baseUrl } from '@/constants/apiUrl';
import sprite from '@/assets/icons/sprite-admin.svg';

import { useIsLoading } from '@/store/loadingStore';
import useQualificatioStore from '@/store/qualificatioStore';

import styles from './QualificationAdmin.module.scss';
import Spinner from '@/ui/Spinner/Spinner';
import Button from '@/components/admin/Button/Button';
import { Field, Form, Formik } from 'formik';
import FileInput from '../formik/FileInput/FileInput';
const initialValues = {
  image: [],
};
const QualificationAdmin = () => {
  const { getDiplomas, deleteDiplomayId, addDiploma } = useQualificatioStore();
  const [diplomas, setDiplomas] = useState();
  const { isLoading, setIsLoading, setLoaded } = useIsLoading();
  const [base64img, setBase64img] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading();
        const result = await getDiplomas();
        // console.log(' result : ', result.data);

        setDiplomas(result.data);
        setLoaded();
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

  const setFileToBase64 = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBase64img(reader.result);
    };
  };
  const onSubmit = async value => {
    try {
      console.log('submit');
      setIsLoading();
      setFileToBase64(value.image[0]);

      if (!base64img) return;
      const serverResp = await addDiploma(base64img);
      console.log('serverResp: ', serverResp);
      console.log('diplomas: ', diplomas);
      if (serverResp) {
        setDiplomas(prev => [serverResp, ...prev]);
        setLoaded();
      } else {
        setLoaded();
        return;
      }
    } catch (error) {
      setLoaded();
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
              // validationSchema={newsValidation}
              onSubmit={onSubmit}
            >
              {formik => {
                return (
                  <Form>
                    <div className={styles.layout}>
                      <Field
                        name="image"
                        id="image"
                        component={FileInput}
                        label="Фото"
                      />
                    </div>
                    <div className={styles.buttonAdd}>
                      <Button
                        // nameButton=""
                        // isActive={formik.isValid}
                        // isRight={true}
                        // handlerSubmitButton={onSubmit}
                        // isProcessing={isProcessing}
                        type="submit"
                      >
                        Додати диплом
                      </Button>
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
