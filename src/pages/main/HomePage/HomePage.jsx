import { useEffect, useState } from 'react';
import style from './HomePage.module.scss';

import Container from '@/components/Container/Container';
import { useMediaQuery } from 'react-responsive';

const HomePage = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="about" className={style.hero}>
        <Container>
          <div className={style.contentWrapper}>
            {isDesktop && (
              <div className={style.heroImage}>
                <div className={style.quote}>
                  <p>Як мало нам потрібно для щастя - трохи знань про себе.</p>
                </div>
              </div>
            )}
            <div className={style.about}>
              <p className={style.aboutName}>
                Привіт!
                <br />
                Мене звати Жанна Барищук
              </p>
              <h2 className={style.aboutJob}>Практикуючий психолог</h2>
              <h2 className={style.aboutContent}>
                Тут про любов до себе, здорові сімейні стосунки та виховання
                щасливих дітей♡
              </h2>
            </div>
            {isMobile && (
              <div className={style.heroImage}>
                <div className={style.heroImage}>
                  <div className={style.quote}>
                    <p>
                      Як мало нам потрібно для щастя - трохи знань про себе.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
      <section className={style.whyMe}>
        <Container>
          <div className={style.whyMe_contentWrapper}>
            {isDesktop && (
              <>
                <div className={style.whyMeContent}>
                  <h2 className={style.whyMeTitle}>В чому моя унікальність?</h2>
                  <p>
                    Я реалізована особистість. Я кваліфікований спеціаліст,
                    кохана, мама, дочка, сестра та подруга. Працюю в морі, і
                    будучи 50/50 свого часу та, я не втратила контакт зі своїм
                    оточенням. Я знаю, що таке баланс між особистим життям,
                    саморозвитком, роботою та відпочинком.
                  </p>
                </div>
                <div className={style.whyMeImg}></div>
              </>
            )}
            {isMobile && (
              <>
                <h2 className={style.whyMeTitle}>В чому моя унікальність?</h2>

                <div className={style.whyMeImgWrapper}>
                  <div className={style.whyMeImg}></div>
                  <p className={style.whyMeContent}>
                    Я реалізована особистість. Я кваліфікований спеціаліст,
                    кохана, мама, дочка, сестра та подруга.
                  </p>
                </div>

                <p className={style.whyMeContentSecondText}>
                  Працюю в морі, і будучи 50/50 свого часу та, я не втратила
                  контакт зі своїм оточенням. Я знаю, що таке баланс між
                  особистим життям, саморозвитком, роботою та відпочинком.
                </p>
              </>
            )}
          </div>
        </Container>
      </section>
      <section id="workAreas"></section>
      <section id="feedBack"></section>
    </>
  );
};

export default HomePage;
