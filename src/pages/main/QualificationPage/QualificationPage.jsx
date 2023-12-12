import Container from '@/components/main/Container/Container';

import IconMore from '@/components/Icons/Main/IconMore';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './QualificationPage.module.scss';
import Spinner from '@/ui/Spinner/Spinner';
import useQualificatioStore from '@/store/qualificatioStore';
import { useIsLoading } from '@/store/loadingStore';
import { baseUrl } from '@/constants/apiUrl';

const QualificationPage = () => {
  const [serteficatesPerPage, setSerteficatesPerPage] = useState(0);
  const { getDiplomas } = useQualificatioStore();
  const [diplomas, setDiplomas] = useState();

  const { isLoading, setIsLoading, setLoaded } = useIsLoading();
  const isMaxAmount = serteficatesPerPage >= diplomas?.length - 1;
  const isDesktop = useMediaQuery({ minWidth: 1240 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const viewMore = () =>
    setSerteficatesPerPage(prev => prev + serteficatesPerPage);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading();
        const result = await getDiplomas();

        setDiplomas(result.data);
        setLoaded();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [getDiplomas, setDiplomas, setIsLoading, setLoaded]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setSerteficatesPerPage(4);
    }
    if (isTablet) {
      setSerteficatesPerPage(6);
    }
    if (isDesktop) {
      setSerteficatesPerPage(12);
    }
  }, [isDesktop, isMobile, isTablet]);
  return (
    <section className="qualification">
      <Container>
        {!isLoading ? (
          <div className={styles.qualification_contentWrapper}>
            <ul className={styles.qualification_list}>
              {diplomas?.slice(0, serteficatesPerPage).map(diploma => (
                <li
                  key={diploma._id}
                  className={styles.qualification_list_item}
                >
                  <img src={diploma.image.url} alt="" />
                </li>
              ))}
            </ul>

            {!isMaxAmount && (
              <button className="buttonLoadMore" onClick={viewMore}>
                Дивитися Більше
                <IconMore />
              </button>
            )}
          </div>
        ) : (
          <Spinner />
        )}
      </Container>
    </section>
  );
};

export default QualificationPage;
