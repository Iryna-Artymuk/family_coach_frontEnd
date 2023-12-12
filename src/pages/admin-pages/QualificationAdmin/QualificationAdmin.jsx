import { useEffect, useState } from 'react';

import { baseUrl } from '@/constants/apiUrl';
import sprite from '@/assets/icons/sprite-admin.svg';

import { useIsLoading } from '@/store/loadingStore';
import useQualificatioStore from '@/store/qualificatioStore';

import styles from './QualificationAdmin.module.scss';
import Spinner from '@/ui/Spinner/Spinner';
import Button from '@/components/admin/Button/Button';

const QualificationAdmin = () => {
  const { getDiplomas, deleteDiplomayId, addDiploma } = useQualificatioStore();
  const [diplomas, setDiplomas] = useState();
  const { isLoading, setIsLoading, setLoaded } = useIsLoading();

  const [fileInputState, setFileInputState] = useState('');

  const [preViewSource, setPreViewSource] = useState();

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
      const deletedDiploma = diplomas.find(diploma => diploma._id === id);

      const newDiplomasArr = diplomas.filter(
        diploma => diploma._id !== deletedDiploma._id
      );

      const result = await deleteDiplomayId(id);
      console.log('result: ', result);
      if (result) {
        setLoaded();

        setDiplomas(newDiplomasArr);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreViewSource(reader.result);
    };
  };
  const handelFileInputChange = e => {
    const file = e.target.files[0];

    previewFile(file);
  };
  const uploadImage = async base64EncodedImage => {
    try {
      await addDiploma(base64EncodedImage);
    } catch (error) {
      console.log(error);
    }
  };
  const handelSubmit = e => {
    e.preventDefault();
    if (!preViewSource) return;
    uploadImage(preViewSource);
    setFileInputState('');
    setPreViewSource('');
  };

  return (
    <div className={styles.list}>
      {!isLoading ? (
        <ul className={styles.list}>
          {diplomas?.map(diploma => (
            <div key={diploma._id} className={styles.listItem}>
              <img src={diploma.image.url} alt="" />
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
          <li className={styles.listItemAdd}>
            <form onSubmit={handelSubmit}>
              <input
                type="file"
                name="image"
                value={fileInputState}
                onChange={handelFileInputChange}
              />
              <Button type="submit"> додати диплом </Button>
            </form>

            {preViewSource && <img src={preViewSource} alt="" />}
          </li>
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default QualificationAdmin;
