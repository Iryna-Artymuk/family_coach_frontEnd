import { useEffect } from 'react';
import style from './HomePage.module.scss';

import Container from '@/components/Container/Container';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <section id="about" className={style.hero}>
        <div className={style.contentWrapper}>
          <div className={style.heroImage}>Фото</div>
          <div className={style.about}>
            <h1 className={style.aboutName}>
              Привіт!
              <br />
              Мене звати Жанна Барищук
            </h1>
            <h2 className={style.aboutJob}>Практикуючий психолог</h2>
            <h2 className={style.aboutContent}>
              Тут про любов до себе, здорові сімейні стосунки та виховання
              щасливих дітей♡
            </h2>
          </div>
        </div>
      </section>

      <section id="workAreas"></section>
      <section id="feedBack"></section>
    </Container>
  );
};

export default HomePage;
