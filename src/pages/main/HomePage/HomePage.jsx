import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

import { useMediaQuery } from 'react-responsive';

import feedbacks from '@/api/api';
import styles from './HomePage.module.scss';

import Container from '@/components/Container/Container';
import Modal from '../../../components/Modal/Modal';
import AddForm from '@/components/Forms/FormAddFeedback';
import Button from '@/components/Button/Button';
import Arrow from '@/components/Icons/Arrow';
import FeedbackCard from '@/components/Swiper/FeedbackCard/FeedbackCard';
import ArticleCard from '@/components/Swiper/ArticleCard/ArticleCard';

import SliderArrowNext from '@/components/Icons/SliderArrowNext';
import SliderArrowPrev from '@/components/Icons/SliderArrowPrev';

import { blogData } from '@/data/blogData.js';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [allfeedbacks, setAllfeedbacks] = useState([]);
  // const [error, setError] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const swiperRef = useRef();
  const swiperRef2 = useRef();
  const isDesktop = useMediaQuery({ minWidth: 1240 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const swiperEl = document.querySelector('swiper-container');
  // const buttonNext = document.querySelector('#buttonNext');
  // const buttonPrev = document.querySelector('#buttonPrev');
  const closeModal = () => {
    setIsOpenModal(false);
    setIsSubmitted();
  };
  const openModal = () => {
    setIsOpenModal(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmitForm = async value => {
    const newFeedback = await feedbacks.addFeedbacks(value);
    console.log('newFeedback : ', newFeedback);
    setAllfeedbacks(prev => [...prev, newFeedback]);
    closeModal();
    setIsSubmitted(!isSubmitted);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
  };

  useEffect(() => {
    const getAllFeedbacks = async () => {
      try {
        const feedbackData = await feedbacks.getFeedbacks();

        setAllfeedbacks(feedbackData);
      } catch (Error) {
        // setError(Error.message);
        console.log(Error.message);
      } finally {
        // setLoading(false);
      }
    };
    getAllFeedbacks();
  }, []);

  return (
    <>
      <section id="about" className={styles.hero}>
        <Container>
          <div className={styles.contentWrapper}>
            {isMobile && (
              <>
                <p className={styles.aboutName}>
                  Привіт!
                  <br />
                  Мене звати Жанна Барищук
                </p>
                <h2 className={styles.aboutJob}>Практикуючий психолог</h2>
                <h2 className={styles.aboutContent}>
                  Тут про любов до себе, здорові сімейні стосунки та виховання
                  щасливих дітей
                </h2>
              </>
            )}

            <div className={styles.heroImage}>
              <div className={styles.quote}>
                <p>Як мало нам потрібно для щастя - трохи знань про себе.</p>
              </div>
            </div>
            <div className={styles.about}>
              {(isDesktop || isTablet) && (
                <>
                  <p className={styles.aboutName}>
                    Привіт!
                    <br />
                    Мене звати Жанна Барищук
                  </p>
                  <h2 className={styles.aboutJob}>Практикуючий психолог</h2>
                  <h2 className={styles.aboutContent}>
                    Тут про любов до себе, здорові сімейні стосунки та виховання
                    щасливих дітей
                  </h2>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.whyMe}>
        <Container>
          <div className={styles.whyMe_wrapper}>
            <div className={styles.whyMe_contentWrapper}>
              {isMobile && (
                <div className={styles.whyMe_textWrapper}>
                  <h2 className={styles.title}>В чому моя унікальність?</h2>
                  <div className={styles.whyMe_imgWrapper}>
                    <div className={styles.whyMe_img}></div>
                    <p className={styles.whyMe_text}>
                      Я реалізована особистість. Я кваліфікований спеціаліст,
                      кохана, мама, дочка, сестра та подруга.
                    </p>
                  </div>
                  <p className={styles.whyMe_secondText}>
                    Працюю в морі, і будучи 50/50 свого часу та, я не втратила
                    контакт зі своїм оточенням. Я знаю, що таке баланс між
                    особистим життям, саморозвитком, роботою та відпочинком.
                  </p>
                </div>
              )}
              {(isDesktop || isTablet) && (
                <>
                  <div className={styles.whyMe_img}></div>
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
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.myPrinciples}>
        <Container>
          <div className={styles.myPrinciples_ContentWrapper}>
            {(isDesktop || isTablet) && (
              <>
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
                        Відповідальність 50/50 – я не можу змінити ваше життя.
                        Треба змінювати свою поведінку, звички, установки,
                        думки. Це не просто і не швидко.
                      </p>
                    </li>
                    <li className={styles.myPrinciples_List_Item}>
                      <p className={styles.myPrinciples_List_ItemText}>
                        Не проводжу консультації в поганому самопочутті,аби це
                        не впливало на ефективність роботи
                      </p>
                    </li>
                    <li className={styles.myPrinciples_List_Item}>
                      <p className={styles.myPrinciples_List_ItemText}>
                        Не беру більше 3-х клієнтів в день. Субота та неділя
                        працюю лише з клієнтами з супроводом*
                      </p>
                    </li>
                  </ul>
                </div>
                <div className={styles.myPrinciplesImg}></div>
              </>
            )}

            {isMobile && (
              <>
                <div className={styles.myPrinciplesImgWrapper}>
                  <h2 className={styles.title}>Мої принципи роботи:</h2>
                  <ul className={styles.myPrinciples_List1}>
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
                  </ul>
                  <div className={styles.myPrinciplesImg}></div>
                </div>

                <ul className={styles.myPrinciples_List2}>
                  <li className={styles.myPrinciples_List_Item}>
                    <p>
                      Відповідальність 50/50 – я не можу змінити ваше життя.
                      Треба змінювати свою поведінку, звички, установки, думки.
                      Це не просто і не швидко.
                    </p>
                  </li>
                  <li className={styles.myPrinciples_List_Item}>
                    <p>
                      Не проводжу консультації в поганому самопочутті,аби це не
                      впливало на ефективність роботи
                    </p>
                  </li>
                  <li className={styles.myPrinciples_List_Item}>
                    <p>
                      Не беру більше 3-х клієнтів в день. Субота та неділя
                      працюю лише з клієнтами з супроводом*
                    </p>
                  </li>
                </ul>
              </>
            )}
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

      <section className="feedBack" id="feedback">
        <Container>
          <div className={styles.feedBack_contentWrapper}>
            <h2 className={styles.title}>Відгуки</h2>

            {allfeedbacks.length > 0 ? (
              <div className={styles.feedbakSwiperWrapper}>
                <Button buttonAddMore type="button" onClick={openModal}>
                  Додати відгук
                </Button>
                <Swiper
                  onSwiper={swiper => {
                    swiperRef.current = swiper;
                  }}
                  loop={true}
                  spaceBetween={12}
                  slidesPerView={1.2}
                  // centeredSlides={true}
                  breakpoints={{
                    1240: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    768: {
                      slidesPerView: 2.2,
                      spaceBetween: 12,
                    },
                    500: {
                      slidesPerView: 1.5,
                    },
                  }}
                >
                  {allfeedbacks?.map(feedback => {
                    return (
                      <SwiperSlide
                        className={styles.slideFeedback}
                        key={feedback.id}
                      >
                        <FeedbackCard feedback={feedback} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                {isDesktop && (
                  <>
                    <button
                      className={styles.buttonPrev}
                      onClick={() => swiperRef.current.slidePrev()}
                    >
                      <SliderArrowPrev />
                    </button>
                    <button
                      className={styles.buttonNext}
                      onClick={() => swiperRef.current.slideNext()}
                    >
                      <SliderArrowNext />
                    </button>
                  </>
                )}
              </div>
            ) : (
              <p>Будьте перштм хто додасть відгук</p>
            )}
            {isOpenModal && (
              <Modal
                type="modal"
                closeModal={closeModal}
                isSubmitted={isSubmitted}
              >
                <AddForm handleSubmitForm={handleSubmitForm} />
              </Modal>
            )}
            {isSubmitted && (
              <Modal type="thanksModal" closeModal={closeModal}>
                <div className={styles.thanksMessage}>Дякую за відгук</div>
              </Modal>
            )}
          </div>
        </Container>
      </section>

      <section className="blog">
        <Container>
          <div className={styles.blog_contentWrapper}>
            <h2 className={styles.title}>Cтатті</h2>

            <div className={styles.blog_swiperwrapper}>
              <Link
                className={styles.blog_Link}
                to="/blog"
                buttonAddMore
                type="button"
              >
                Дивитися усі статті
              </Link>
              {isDesktop && (
                <>
                  <button
                    className={styles.buttonPrev}
                    onClick={() => swiperRef2.current.slidePrev()}
                  >
                    <SliderArrowPrev />
                  </button>
                  <button
                    className={styles.buttonNext}
                    onClick={() => swiperRef2.current.slideNext()}
                  >
                    <SliderArrowNext />
                  </button>{' '}
                </>
              )}
              <Swiper
                onSwiper={swiper => {
                  swiperRef2.current = swiper;
                }}
                id="feedbackSwiper"
                loop={true}
                spaceBetween={12}
                slidesPerView={1.2}
                // centeredSlides={true}
                breakpoints={{
                  1240: {
                    slidesPerView: 3,
                    spaceBetween: 27,
                  },
                  768: {
                    slidesPerView: 2.2,
                    spaceBetween: 12,
                  },
                  500: {
                    slidesPerView: 1.5,
                  },
                }}
              >
                {blogData.map(article => (
                  <SwiperSlide key={article.id}>
                    <ArticleCard article={article} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
