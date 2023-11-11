import { useEffect, useState } from 'react';
import style from './HomePage.module.scss';

import Container from '@/components/Container/Container';

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <section id="about" className={style.hero}>
        <div className={style.contentWrapper}>
          {windowWidth >= 768 && (
            <div className={style.heroImage}>
              <div className={style.quote}>
                <p>Як мало нам потрібно для щастя - трохи знань про себе.</p>
              </div>
            </div>
          )}
          <div className={style.about}>
            
            <p className={ style.aboutName }>Привіт!<br/>
              Мене звати Жанна Барищук</p>
            <h2 className={style.aboutJob}>Практикуючий психолог</h2>
            <h2 className={style.aboutContent}>
              Тут про любов до себе, здорові сімейні стосунки та виховання
              щасливих дітей♡
            </h2>
          </div>
          {windowWidth < 768 && (
            <div className={style.heroImage}>
              <div className={style.heroImage}>
                <div className={style.quote}>
                  <p>Як мало нам потрібно для щастя - трохи знань про себе.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="workAreas"></section>
      <section id="feedBack"></section>
    </Container>
  );
};

export default HomePage;
