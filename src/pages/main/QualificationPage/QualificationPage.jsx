import { Cloudinary } from '@cloudinary/url-gen';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react';
import Container from '@/components/main/Container/Container';
import IconMore from '@/components/Icons/Main/IconMore';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './QualificationPage.module.scss';
import heroPhoto from '../../../../public/images/heroPhoto.jpg';
import useQualificatioStore from '@/store/qualificatioStore';
import { useIsLoading } from '@/store/loadingStore';
import Spinner from '@/ui/Spinner/Spinner';
import Seo from '@/components/SEO/Seo';


const QualificationPage = () => {
  const [serteficatesPerPage, setSerteficatesPerPage] = useState(0);
  const { getDiplomas } = useQualificatioStore();
  const [diplomas, setDiplomas] = useState();

  const { isLoading, setIsLoading, setLoaded } = useIsLoading();
  const isMaxAmount = serteficatesPerPage >= diplomas?.length - 1;
  const isDesktop = useMediaQuery({ minWidth: 1240 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const isMobile = useMediaQuery({ maxWidth: 767 });
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dmzxbkd8p',
    },
  });
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
      <Seo
        title="Кваліфікація сімейного  психолога Жанни Барищук"
        description="Кваліфікація сімейного  психолога Жанни Барищук, дипломи, сертифікати, досягнення в галузі психології"
        ogUrl="https://family-coach.vercel.app/qualification"
        ogTitle="Ціна консультацій психолога"
        ogDescription="Кваліфікація сімейного  психолога Жанни Барищук, дипломи, сертифікати, досягнення в галузі психології"
        ogArticle="Кваліфікація сімейного  психолога Жанни Барищук, дипломи, сертифікати, досягнення в галузі психології"
        ogImage={`https://family-coach.vercel.app${heroPhoto}`}
      />
      <Container>
        {!isLoading ? (
          <div className={styles.qualification_contentWrapper}>
            <ul className={styles.qualification_list}>
              {diplomas?.slice(0, serteficatesPerPage).map(diploma => (
                <li
                  key={diploma._id}
                  className={styles.qualification_list_item}
                >
                  <AdvancedImage
                    cldImg={cld
                      .image(diploma?.image.public_id)
                      // .resize(Resize.scale().width(430).height(350))
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
          <>
            <h2 className="loadingText">
              Зачекайте будь-ласка мої дипломи завантажуються...
            </h2>
            <Spinner />
          </>
        )}
      </Container>
    </section>
  );
};

export default QualificationPage;
