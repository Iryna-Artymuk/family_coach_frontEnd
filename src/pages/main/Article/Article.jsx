import Container from '@/components/Container/Container';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { blogData } from '@/data/blogData.js';

import styles from './Article.module.scss';
import { formatDate } from '@/helpers/formatDate';
import { useMediaQuery } from 'react-responsive';

import SliderArrowNext from '@/components/Icons/SliderArrowNext';
import SliderArrowPrev from '@/components/Icons/SliderArrowPrev';
import { SwiperSlide, Swiper } from 'swiper/react';

const Article = () => {
  // const location = useLocation();
  const backLinkHref = '/blog';
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const isDesktop = useMediaQuery({ minWidth: 1240 });
  const swiperRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // запит на бекенд по 1 статтю за id
    const findArticle = blogData.find(
      article => article.id.toString() === articleId
    );
    setArticle(findArticle);
  }, [articleId]);

  return (
    <>
      <section>
        <Container>
          <div className={styles.article_contentwrapper}>
            <acticle className={styles.article}>
              <Link className={styles.article_linkGoBack} to={backLinkHref}>
                Повернутись до всіх статтей
              </Link>
              <div className={styles.articletextWrapper}>
                <h1 className="title">{article.title}</h1>
                <p className={styles.article_text}>{article.body}</p>
              </div>

              <div className={styles.article_info}>
                <p className={styles.article_date}>
                  {formatDate(article.date)}
                </p>
                <p className={styles.article_author}>{article.author}</p>
              </div>
            </acticle>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.swiper_wrapper}>
              {isDesktop && (
                <>
                  <button
                    className="buttonPrev"
                    onClick={() => swiperRef.current.slidePrev()}
                  >
                    <SliderArrowPrev />
                  </button>
                  <button
                    className="buttonNext"
                    onClick={() => swiperRef.current.slideNext()}
                  >
                    <SliderArrowNext />
                  </button>{' '}
                </>
              )}
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
                    spaceBetween: 27,
                  },
                }}
              >
                {blogData.map(article => (
                  <SwiperSlide key={article.id}>
                    <Link
                      to={`/blog/${article.id}`}
                      onClick={window.scrollTo(0, 0)}
                    >
                      <div className={styles.swiper_content}>
                        <img
                          className={styles.swiperImg}
                          src={`/public/${article.url}`}
                          alt=""
                        />
                        <h2 className="title">{article.title}</h2>
                      </div>
                    </Link>
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

export default Article;
