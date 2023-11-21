import Container from '@/components/Container/Container';

import IconMore from '@/components/Icons/IconMore';
import { sertificatesData } from '@/data/sertificateData';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './QualificationPage.module.scss';
const QualificationPage = () => {
  const [serteficatesPerPage, setSerteficatesPerPage] = useState(0);

  const isMaxAmount = serteficatesPerPage >= sertificatesData.length - 1;
  const isDesktop = useMediaQuery({ minWidth: 1240 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const viewMore = () =>
    setSerteficatesPerPage(prev => prev + serteficatesPerPage);

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
        <div className={styles.qualification_contentWrapper}>
          <ul className={styles.qualification_list}>
            {sertificatesData.slice(0, serteficatesPerPage).map(item => (
              <li key={item.id} className={styles.qualification_list_item}>
                <img src={`${item.url}`} alt="" />
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
      </Container>
    </section>
  );
};

export default QualificationPage;
