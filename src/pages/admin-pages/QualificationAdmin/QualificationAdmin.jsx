import { useEffect, useState } from 'react';
import FormData from 'form-data';
import { Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { Resize } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';

import { useIsLoading } from '@/store/loadingStore';
import useQualificatioStore from '@/store/qualificatioStore';
import Spinner from '@/ui/Spinner/Spinner';
import FileInput from '../formik/FileInput/FileInput';
import { diplomaImageValidation } from './validationSchema.js';
import sprite from '@/assets/icons/sprite-admin.svg';
import styles from './QualificationAdmin.module.scss';

const initialValues = {
  image: [],
};
const QualificationAdmin = () => {
  const { getDiplomas, deleteDiplomayId, addDiploma } = useQualificatioStore();
  const [diplomas, setDiplomas] = useState();
  const { isLoading, setIsLoading, setLoaded } = useIsLoading();

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dmzxbkd8p',
    },
  });

  // cld.image returns a CloudinaryImage with the configuration set.

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

      if (result.status === 'success') {
        const deletedDiploma = diplomas.find(diploma => diploma._id === id);
        const newDiplomasArr = diplomas.filter(
          diploma => diploma._id !== deletedDiploma._id
        );
        setDiplomas(newDiplomasArr);
        toast.success('Ура, диплом видалений');
        setLoaded();
      } else {
        if (result.status === 'error') {
          toast.error('не вдалось видалити , запитай Іру');
        }
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
    formData.append('diplomaImg', values.image[0]);
    try {
      setIsLoading();
      const result = await addDiploma(formData);
      if (result.status === 'success') {
        setDiplomas(prev => [result.data, ...prev]);
        toast.success('Ура, диплом доданий, давай ще ');
      }
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
            </Formik>
          </li>

          {diplomas?.map(diploma => {
            return (
              <li key={diploma._id} className={styles.listItem}>
                <AdvancedImage
                  cldImg={cld
                    .image(diploma?.image.public_id)
                    .resize(Resize.scale().width(430).height(350))
                    .roundCorners(byRadius(15))}
                  plugins={
                    ([
                      lazyload({
                        rootMargin: '10px 20px 10px 30px',
                        threshold: 0.25,
                      }),
                    ],
                    [responsive({ steps: 100 })],
                    [placeholder({ mode: 'blur' })])
                  }
                />

                <div
                  className={styles.deleteIcon}
                  onClick={() => handelDelete(diploma._id)}
                >
                  <svg>
                    <use href={`${sprite}#${'icon-delete'}`} />
                  </svg>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default QualificationAdmin;
