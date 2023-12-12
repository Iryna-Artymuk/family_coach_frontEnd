import { useEffect, useState } from 'react';

import { baseUrl } from '@/constants/apiUrl';
import sprite from '@/assets/icons/sprite-admin.svg';

import { useIsLoading } from '@/store/loadingStore';
import useQualificatioStore from '@/store/qualificatioStore';

import styles from './QualificationAdmin.module.scss';

const QualificationAdmin = () => {
  const { getDiplomas, deleteDiplomayId } = useQualificatioStore();
  const [diplomas, setDiplomas] = useState();
  const { isLoading, setIsLoading, setLoaded } = useIsLoading();

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

  const handelDelete = id => {
    try {
      deleteDiplomayId(id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.list}>
      {!isLoading ? (
        <ul className={styles.list}>
          {diplomas?.map(diploma => (
            <div key={diploma._id} className={styles.listItem}>
              <img src={`${baseUrl}${diploma.url}`} alt="" />
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
          <li className={styles.listItemAdd}> Додати диплом</li>
        </ul>
      ) : (
        'loading...'
      )}
    </div>
  );
};

export default QualificationAdmin;
