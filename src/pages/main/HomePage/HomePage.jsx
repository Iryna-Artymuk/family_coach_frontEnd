import { useEffect, useRef } from 'react';
// import clsx from 'clsx';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import styles from './HomePage.module.scss';

import Container from '@/components/Container/Container';
import { useMediaQuery } from 'react-responsive';
import Button from '@/components/Button/Button';
import Arrow from '@/components/Icons/Arrow';
const HomePage = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const swiperRef = useRef();
  // const date = new Date();
  // const day = date.getDate();
  // const month = date.getMonth() + 1;
  // const year = date.getFullYear();
  // const  = `${day}.${month}.${year}`;

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
          </div>
        </Container>
      </section>

      <section className={styles.myPrinciples}>
        <Container>
          <div className={styles.myPrinciples_ContentWrapper}>
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
            <div className={styles.myPrinciplesImg}></div>
          </div>
        </Container>
      </section>
      <section id="workAreas">
        <Container>
          <div className={styles.workAreas_ContentWrapper}>
            <h2 className={styles.title}>Напрямки роботи</h2>
            <ul className={styles.workAreas_List}>
              <li className={styles.workAreas_List_Item}>
                <span>
                  <Arrow />
                </span>
                <div className={styles.workAreas_List_Item_contentBox}>
                  <h3 className={styles.workAreas_List_ItemTitel}>
                    Сімʼя та реалізація
                  </h3>
                  <p className={styles.workAreas_List_ItemText}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nulla, dolorum qui. Nesciunt ullam cumque magni mollitia,
                    soluta id! Illo, accusamus.
                  </p>
                </div>
              </li>
              <li className={styles.workAreas_List_Item}>
                <span>
                  <Arrow />
                </span>
                <div className={styles.workAreas_List_Item_contentBox}>
                  <h3 className={styles.workAreas_List_ItemTitel}>Страхи</h3>

                  <p className={styles.workAreas_List_ItemText}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nulla, dolorum qui. Nesciunt ullam cumque magni mollitia,
                    soluta id! Illo, accusamus. Lorem ipsum dolor sit, amet
                    consectetur adipisicing
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <section className="feedBack" id="feedBack">
        <Container>
          <div className={styles.feedBack_contentWrapper}>
            <h2 className={styles.title}>Відгуки</h2>

            <div className={styles.swiperwrapper}>
              <Button buttonAddMore type="button">
                Додати відгук
              </Button>

              <Swiper
                className={styles.slider}
                slidesPerView={1}
                loop={true}
                onSwiper={swiper => {
                  swiperRef.current = swiper;
                }}
                breakpoints={{
                  1240: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide className={styles.slide}>
                  <div className={styles.feedBack_wrapper}>
                    <div className={styles.feedBack_titleWrapper}>
                      <p className={styles.feedBack_name}>Name</p>
                      <p className={styles.feedBack_date}>feedbackDate</p>
                    </div>
                    <div className={styles.feedBack_textWrapper}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste aperiam sunt nobis officia quidem natus. Nulla ipsa
                        earum amet qui, ex minima sit laboriosam quidem saepe,
                        aliquid veniam quisquam atque quae aspernatur obcaecati.
                        Sapiente nesciunt facilis placeat consequuntur dolore
                        dolores quibusdam ipsum in debitis quia quos, odit
                        voluptate? Expedita autem, atque magnam blanditiis nobis
                        quis? Aut non perferendis quo ullam provident saepe quas
                        excepturi, esse minus eius, sunt nostrum pariatur odio
                        eligendi culpa, sint veritatis in repudiandae placeat
                        labore. Dicta maxime doloremque necessitatibus inventore
                        molestias deleniti, ullam possimus nobis nihil voluptate
                        doloribus autem at explicabo adipisci esse!
                        Consequuntur, accusamus soluta.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <div className={styles.feedBack_wrapper}>
                    <div className={styles.feedBack_titleWrapper}>
                      <p className={styles.feedBack_name}>Name</p>
                      <p className={styles.feedBack_date}>feedbackDate</p>
                    </div>
                    <div className={styles.feedBack_textWrapper}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste aperiam sunt nobis officia quidem natus. Nulla ipsa
                        earum amet qui, ex minima sit laboriosam quidem saepe,
                        aliquid veniam quisquam atque quae aspernatur obcaecati.
                        Sapiente nesciunt facilis placeat consequuntur dolore
                        dolores quibusdam ipsum in debitis quia quos, odit
                        voluptate? Expedita autem, atque magnam blanditiis nobis
                        quis? Aut non perferendis quo ullam provident saepe quas
                        excepturi, esse minus eius, sunt nostrum pariatur odio
                        eligendi culpa, sint veritatis in repudiandae placeat
                        labore. Dicta maxime doloremque necessitatibus inventore
                        molestias deleniti, ullam possimus nobis nihil voluptate
                        doloribus autem at explicabo adipisci esse!
                        Consequuntur, accusamus soluta.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <div className={styles.feedBack_wrapper}>
                    <div className={styles.feedBack_titleWrapper}>
                      <p className={styles.feedBack_name}>Name</p>
                      <p className={styles.feedBack_date}>feedbackDate</p>
                    </div>
                    <div className={styles.feedBack_textWrapper}>
                      <p>
                        molestias deleniti, ullam possimus nobis nihil voluptate
                        doloribus autem at explicabo adipisci esse!
                        Consequuntur, accusamus soluta.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <div className={styles.feedBack_wrapper}>
                    <div className={styles.feedBack_titleWrapper}>
                      <p className={styles.feedBack_name}>Name</p>
                      <p className={styles.feedBack_date}>feedbackDate</p>
                    </div>
                    <div className={styles.feedBack_textWrapper}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste aperiam sunt nobis officia quidem natus. Nulla ipsa
                        earum amet qui, ex minima sit laboriosam quidem saepe,
                        aliquid veniam quisquam atque quae aspernatur obcaecati.
                        Sapiente nesciunt facilis placeat consequuntur dolore
                        dolores quibusdam ipsum in debitis quia quos, odit
                        voluptate? Expedita autem, atque magnam blanditiis nobis
                        quis? Aut non perferendis quo ullam provident saepe quas
                        excepturi, esse minus eius, sunt nostrum pariatur odio
                        eligendi culpa, sint veritatis in repudiandae placeat
                        labore. Dicta maxime doloremque necessitatibus inventore
                        molestias deleniti, ullam possimus nobis nihil voluptate
                        doloribus autem at explicabo adipisci esse!
                        Consequuntur, accusamus soluta.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <div className={styles.feedBack_wrapper}>
                    <div className={styles.feedBack_titleWrapper}>
                      <p className={styles.feedBack_name}>Name</p>
                      <p className={styles.feedBack_date}>feedbackDate</p>
                    </div>
                    <div className={styles.feedBack_textWrapper}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste aperiam sunt nobis officia quidem natus. Nulla ipsa
                        earum amet qui, ex minima sit laboriosam quidem saepe,
                        aliquid veniam quisquam atque quae aspernatur obcaecati.
                        Sapiente nesciunt facilis placeat consequuntur dolore
                        dolores quibusdam ipsum in debitis quia quos, odit
                        voluptate? Expedita autem, atque magnam blanditiis nobis
                        quis? Aut non perferendis quo ullam provident saepe quas
                        excepturi, esse minus eius, sunt nostrum pariatur odio
                        eligendi culpa, sint veritatis in repudiandae placeat
                        labore. Dicta maxime doloremque necessitatibus inventore
                        molestias deleniti, ullam possimus nobis nihil voluptate
                        doloribus autem at explicabo adipisci esse!
                        Consequuntur, accusamus soluta.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <div className={styles.feedBack_wrapper}>
                    <div className={styles.feedBack_titleWrapper}>
                      <p className={styles.feedBack_name}>Name</p>
                      <p className={styles.feedBack_date}>feedbackDate</p>
                    </div>
                    <div className={styles.feedBack_textWrapper}>
                      <p>
                        molestias deleniti, ullam possimus nobis nihil voluptate
                        doloribus autem at explicabo adipisci esse!
                        Consequuntur, accusamus soluta.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <button
                className={styles.prevSlide}
                onClick={() => swiperRef.current.slidePrev()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
              </button>
              <button
                className={styles.nextSlide}
                onClick={() => swiperRef.current.slideNext()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </section>
      <section className="blog">
        <Container>
          <div>
            <h2 className={styles.title}>Cтатті</h2>
            <Button buttonAddMore type="button">
              Дивитися усі статті
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
