import { useEffect } from 'react';
import clsx from 'clsx';
import styles from './HomePage.module.scss';

import Container from '@/components/Container/Container';
import { useMediaQuery } from 'react-responsive';
import Button from '@/components/Button/Button';

const HomePage = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="about" className={styles.hero}>
        <Container>
          <div className={styles.contentWrapper}>
            {isDesktop && (
              <div className={styles.heroImage}>
                <div className={styles.quote}>
                  <p>Як мало нам потрібно для щастя - трохи знань про себе.</p>
                </div>
              </div>
            )}
            <div className={styles.about}>
              <p className={styles.aboutName}>
                Привіт!
                <br />
                Мене звати Жанна Барищук
              </p>
              <h2 className={styles.aboutJob}>Практикуючий психолог</h2>
              <h2 className={styles.aboutContent}>
                Тут про любов до себе, здорові сімейні стосунки та виховання
                щасливих дітей♡
              </h2>
            </div>
            {isMobile && (
              <div className={styles.heroImage}>
                <div className={styles.heroImage}>
                  <div className={styles.quote}>
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
      <section className={styles.whyMe}>
        <Container>
          <div className={styles.whyMe_wrapper}>
            <div className={styles.whyMe_contentWrapper}>
              <div className={styles.whyMe_textWrapper}>
                <h2 className={styles.title}>В чому моя унікальність?</h2>
                <p className={styles.whyMe_text}>
                  Я реалізована особистість. Я кваліфікований спеціаліст,
                  кохана, мама, дочка, сестра та подруга. Працюю в морі, і
                  будучи 50/50 свого часу та, я не втратила контакт зі своїм
                  оточенням. Я знаю, що таке баланс між особистим життям,
                  саморозвитком, роботою та відпочинком.
                </p>
              </div>
              <div className={styles.whyMeImg}></div>
            </div>

            {/* {isMobile && (
              <>
                <h2 className={styles.title}>В чому моя унікальність?</h2>

                <div className={styles.whyMeImgWrapper}>
                  <div className={styles.whyMeImg}></div>
                  <p className={styles.whyMeContent}>
                    Я реалізована особистість. Я кваліфікований спеціаліст,
                    кохана, мама, дочка, сестра та подруга.
                  </p>
                </div>

                <p className={styles.whyMeContentSecondText}>
                  Працюю в морі, і будучи 50/50 свого часу та, я не втратила
                  контакт зі своїм оточенням. Я знаю, що таке баланс між
                  особистим життям, саморозвитком, роботою та відпочинком.
                </p>
              </>
            )} */}
          </div>
        </Container>
      </section>
      <section className={styles.myPrinciples}>
        <Container>
          <div className={styles.myPrinciples_ContentWrapper}>
            <div className={styles.myPrinciplesImg}></div>
            <div className={styles.myPrinciples_ListWrapper}>
              <h2 className={styles.title}>Мої принципи роботи:</h2>
              <ul className={styles.myPrinciples_List}>
                <li className={styles.myPrinciples_List_Item}>
                  <p className={styles.myPrinciples_List_ItemText}>
                    Тривалість консультації: діти від 4-х років 30-45 хв.,
                    підлітки 45-50 хв., дорослі 50-70 хв.
                  </p>
                </li>
                <li className={styles.myPrinciples_List_Item}>
                  <p className={styles.myPrinciples_List_ItemText}>
                    Робота з дітьми починається з роботи з батьками
                  </p>
                </li>
                <li className={styles.myPrinciples_List_Item}>
                  <p className={styles.myPrinciples_List_ItemText}>
                    Конфіденційність
                  </p>
                </li>
                <li className={styles.myPrinciples_List_Item}>
                  <p className={styles.myPrinciples_List_ItemText}>
                    Індивідуальний підхід
                  </p>
                </li>
                <li className={styles.myPrinciples_List_Item}>
                  <p className={styles.myPrinciples_List_ItemText}>
                    Відповідальність 50/50 – я не можу змінити ваше життя. Треба
                    змінювати свою поведінку, звички, установки, думки. Це не
                    просто і не швидко.
                  </p>
                </li>
                <li className={styles.myPrinciples_List_Item}>
                  <p className={styles.myPrinciples_List_ItemText}>
                    Не проводжу консультації в поганому самопочутті,аби це не
                    впливало на ефективність роботи
                  </p>
                </li>

                <li className={styles.myPrinciples_List_Item}>
                  <p className={styles.myPrinciples_List_ItemText}>
                    Не беру більше 3-х клієнтів в день. Субота та неділя працюю
                    лише з клієнтами з супроводом*
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section id="workAreas">
        <Container>
          <div>
            <h2 className={styles.title}>Напрямки роботи</h2>
            <ul>
              <li>
                <h3>Сімʼя та реалізація</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla, dolorum qui. Nesciunt ullam cumque magni mollitia,
                  soluta id! Illo, accusamus.
                </p>
              </li>
              <li>
                <h3>Страхи</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla, dolorum qui. Nesciunt ullam cumque magni mollitia,
                  soluta id! Illo, accusamus.
                </p>
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <section className="feedBack" id="feedBack">
        <Container>
          <div>
            <h2 className={styles.title}>Відгуки</h2>
            <Button type="button">Додати відгук</Button>
            <div> Slider</div>
          </div>
        </Container>
      </section>
      <section className="blog">
        <Container>
          <div>
            <h2 className={styles.title}>Cтатті</h2>
            <Button type="button">Дивитися усі статті</Button>
            <div> Slider</div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
