import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { useMediaQuery } from 'react-responsive';
import Container from '@/components/main/Container/Container';
import Modal from '../../../components/main/Modal/Modal';
import AddForm from '@/components/Forms/FormAddFeedback';
import Button from '@/components/main/Button/Button';
import Arrow from '@/components/Icons/Main/Arrow';
import FeedbackCard from '@/components/Swiper/FeedbackCard/FeedbackCard';
import ArticleCard from '@/components/Swiper/ArticleCard/ArticleCard';

import SliderArrowNext from '@/components/Icons/Main/SliderArrowNext';
import SliderArrowPrev from '@/components/Icons/Main/SliderArrowPrev';

import heroPhoto from '../../../../public/images/heroPhoto.jpg';
import myPricepls from '@/assets/images/myPricepls.jpg';
import whyMe from '@/assets/images/whyMe.jpg';

import styles from './HomePage.module.scss';
import useFeedbackStore from '@/store/feedbackStore';

import Spinner from '@/ui/Spinner/Spinner';
import { useIsLoading } from '@/store/loadingStore';
import useBlogStore from '@/store/blogStore';
import Seo from '@/components/SEO/Seo';

const HomePage = () => {
  const [allfeedbacks, setAllfeedbacks] = useState([]);

  const [feedbackStatus] = useState('approved');
  const { getFeedbacks } = useFeedbackStore();
  const { getPosts } = useBlogStore();
  const [posts, setPosts] = useState([]);

  const { isLoading, setIsLoading, setLoaded } = useIsLoading();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const swiperRef = useRef();
  const swiperRef2 = useRef();
  const isDesktop = useMediaQuery({ minWidth: 1240 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const closeModal = () => {
    setIsOpenModal(false);
    setIsSubmitted();
  };
  const openModal = () => {
    setIsOpenModal(true);
  };
  useEffect(() => {
    document.title =
      'Досвідчений сімейний психолог Жанна Барищук, психологічні консультації для  дорослих підлітків та дітей';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getAllFeedbacks = async () => {
      try {
        setIsLoading();
        const result = await getFeedbacks(feedbackStatus);
        const blogresult = await getPosts();
        setPosts(blogresult.data);
        setAllfeedbacks(result.data);
        setLoaded();
      } catch (Error) {
        // setError(Error.message);
        console.log(Error.message);
      } finally {
        setLoaded();
      }
    };
    getAllFeedbacks();
  }, [feedbackStatus, getFeedbacks, getPosts, setLoaded, setIsLoading]);

  return (
    <>
      <Seo
        title="Досвідчений сімейний психолог Жанна Барищук, психологічні консультації для  дорослих підлітків та дітей"
        description="професійна психологічна підтримка для дорослих, дітей та  підлітків , допомагаю  знайти сенс життя, покращити самооцінку, розуміти та керувати своїми емоціями, навчу любити до себе, будувати  здорові сімейні стосунки та виховати щасливих дітей"
        ogUrl="https://family-coach.vercel.app/"
        ogTitle="Cімейний психолог Жанна Барищук, психологічні консультації для  дорослих підлітків та дітей"
        ogDescription="професійна психологічна підтримка для дорослих, дітей та  підлітків , допомагаю  знайти сенс життя, покращити самооцінку, розуміти та керувати своїми емоціями, навчу любити до себе, будувати  здорові сімейні стосунки та виховати щасливих дітей"
        ogArticle="професійна психологічна підтримка для дорослих, дітей та  підлітків , допомагаю  знайти сенс життя, покращити самооцінку, розуміти та керувати своїми емоціями, навчу любити до себе, будувати  здорові сімейні стосунки та виховати щасливих дітей"
        ogImage={`https://family-coach.vercel.app${heroPhoto}`}
      />
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

            <div
              className={styles.heroImage}
              style={{
                backgroundImage: `url(${heroPhoto})`,
              }}
            >
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
                    <div className={styles.whyMe_img}>
                      <img src={whyMe} alt="" />
                    </div>
                    <p className={styles.whyMe_text}>
                      Я реалізована особистість. Я кваліфікований спеціаліст,
                      кохана, мама, дочка, сестра та подруга.
                    </p>
                  </div>
                  <p className={styles.whyMe_secondText}>
                    Працюю в морі, і будучи 50/50 свого часу там, я не втратила
                    контакт зі своїм оточенням. Я знаю, що таке баланс між
                    особистим життям, саморозвитком, роботою та відпочинком.
                  </p>
                </div>
              )}
              {(isDesktop || isTablet) && (
                <>
                  <div className={styles.whyMe_img}>
                    <img src={whyMe} alt="Жанна Барищук" />
                  </div>
                  <div className={styles.whyMe_textWrapper}>
                    <h2 className={styles.title}>В чому моя унікальність?</h2>

                    <p className={styles.whyMe_text}>
                      Я реалізована особистість. Я кваліфікований спеціаліст,
                      кохана, мама, дочка, сестра та подруга. Працюю в морі, і
                      будучи 50/50 свого часу там я не втратила контакт зі своїм
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
                        Тривалість консультації: діти від 4-х років – 30-45 хв.,
                        підлітки – 45-50 хв., дорослі – 50-70 хв.
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
                <div className={styles.myPrinciplesImg}>
                  <img src={myPricepls} alt="Жанна Барищук" />
                </div>
              </>
            )}

            {isMobile && (
              <>
                <div className={styles.myPrinciplesImgWrapper}>
                  <h2 className={styles.title}>Мої принципи роботи:</h2>
                  <ul className={styles.myPrinciples_List1}>
                    <li className={styles.myPrinciples_List_Item}>
                      <p className={styles.myPrinciples_List_ItemText}>
                        Тривалість консультації: діти від 4-х років – 30-45 хв.,
                        підлітки – 45-50 хв., дорослі – 50-70 хв.
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
                  <div className={styles.myPrinciplesImg}>
                    <img src={myPricepls} alt="Жанна Барищук" />
                  </div>
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
                  <ul className={styles.workAreas_subList}>
                    <li className={styles.workAreas_subList_item}>
                      <p className={styles.workAreas_subList_itemText}>
                        Сімейне консультування
                      </p>
                    </li>
                    <li className={styles.workAreas_subList_item}>
                      <p className={styles.workAreas_subList_itemText}>
                        Співзалежні стосунки{' '}
                      </p>
                    </li>
                    <li className={styles.workAreas_subList_item}>
                      <p className={styles.workAreas_subList_itemText}>
                        Консультування підлітків та дітей
                      </p>
                    </li>
                    <li className={styles.workAreas_subList_item}>
                      <p className={styles.workAreas_subList_itemText}>
                        Самооцінка і самоцінність
                      </p>
                    </li>
                    <li className={styles.workAreas_subList_item}>
                      <p className={styles.workAreas_subList_itemText}>
                        Пошук сенсу життя
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.workAreas_List_Item}>
                <span>
                  <Arrow />
                </span>
                <div className={styles.workAreas_List_Item_contentBox}>
                  <h3 className={styles.workAreas_List_ItemTitel}>
                    Напружені психоемоційні стани
                  </h3>

                  <ul className={styles.workAreas_subList}>
                    <li className={styles.workAreas_subList_item}>
                      <p className={styles.workAreas_subList_itemText}>
                        Страхи і тривожність
                      </p>
                    </li>
                    <li className={styles.workAreas_subList_item}>
                      <p className={styles.workAreas_subList_itemText}>
                        Панічні атаки
                      </p>
                    </li>
                    <li className={styles.workAreas_subList_item}>
                      <p className={styles.workAreas_subList_itemText}>
                        Травма
                      </p>
                    </li>
                    <li className={styles.workAreas_subList_item}>
                      <p className={styles.workAreas_subList_itemText}>
                        Робота зі злістю та агресивною поведінкою
                      </p>
                    </li>
                    <li className={styles.workAreas_subList_item}>
                      <p className={styles.workAreas_subList_itemText}>
                        Депресивні настрої
                      </p>
                    </li>
                  </ul>
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
            {!isLoading ? (
              <>
                <Button buttonaddmore="true" type="button" onClick={openModal}>
                  Додати відгук
                </Button>
                {allfeedbacks.length > 0 ? (
                  <div className={styles.feedbakSwiperWrapper}>
                    <Swiper
                      onSwiper={swiper => {
                        swiperRef.current = swiper;
                      }}
                      loop={true}
                      spaceBetween={12}
                      slidesPerView={1.2}
                      // centeredSlides={true}
                      breakpoints={{
                        425: {
                          slidesPerView: 1.5,
                        },
                        768: {
                          slidesPerView: 2.5,
                          spaceBetween: 12,
                        },

                        1240: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                      }}
                    >
                      {allfeedbacks?.map(feedback => {
                        return (
                          <SwiperSlide
                            className={styles.slideFeedback}
                            key={feedback._id}
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
                  <p>Будьте першим, додайте відгук про мою роботу</p>
                )}
              </>
            ) : (
              <>
                {' '}
                <h2 className="loadingText">
                  Зачекайте будь-ласка статті завантажуються...
                </h2>
                <Spinner />
              </>
            )}
            {isOpenModal && (
              <Modal
                type="modal"
                closeModal={closeModal}
                isSubmitted={isSubmitted}
              >
                <AddForm
                  setIsSubmitted={setIsSubmitted}
                  isSubmitted={isSubmitted}
                  closeModal={closeModal}
                />
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
            {!isLoading ? (
              <div className={styles.blog_swiperwrapper}>
                <Link
                  className={styles.blog_Link}
                  to="/blog"
                  // buttonaddmore={true}
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
                    425: {
                      slidesPerView: 1.5,
                    },
                    768: {
                      slidesPerView: 2.5,
                      spaceBetween: 12,
                    },

                    1240: {
                      slidesPerView: 3,
                      spaceBetween: 27,
                    },
                  }}
                >
                  {posts.map(article => (
                    <SwiperSlide key={article._id}>
                      <ArticleCard article={article} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <>
                {' '}
                <h2 className="loadingText">
                  Зачекайте будь-ласка статті завантажуються...
                </h2>
                <Spinner />
              </>
            )}
          </div>
        </Container>
      </section>
      {isDesktop && (
        <a
          className={styles.writemeLink}
          href="https://t.me/Zh_Bshch"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <p> Напиши мені</p>
        </a>
      )}
    </>
  );
};

export default HomePage;
