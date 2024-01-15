import { Cloudinary } from '@cloudinary/url-gen';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react';
import Container from '@/components/main/Container/Container';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styles from './Article.module.scss';
import { formatDate } from '@/helpers/formatDate';
import { useMediaQuery } from 'react-responsive';

import SliderArrowNext from '@/components/Icons/Main/SliderArrowNext';
import SliderArrowPrev from '@/components/Icons/Main/SliderArrowPrev';
import { SwiperSlide, Swiper } from 'swiper/react';

import useBlogStore from '@/store/blogStore';
import { useIsLoading } from '@/store/loadingStore';

import 'react-quill/dist/quill.core.css';
import Seo from '@/components/SEO/Seo';
const Article = () => {
  // const location = useLocation();
  const { getPosts } = useBlogStore();
  const [posts, setPosts] = useState([]);
  const { setIsLoading, setLoaded } = useIsLoading();
  const backLinkHref = '/blog';
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  console.log('article: ', article);
  const isDesktop = useMediaQuery({ minWidth: 1240 });
  const swiperRef = useRef();

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dmzxbkd8p',
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading();
        const result = await getPosts();

        setPosts(result.data);
        setLoaded();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [getPosts, setPosts, setIsLoading, setLoaded]);

  useEffect(() => {
    // запит на бекенд по 1 статтю за id
    const findArticle = posts?.find(article => article._id === articleId);

    setArticle(findArticle);
  }, [articleId, posts]);

  return (
    <>
      <section>
        <Seo
          title={article?.title}
          description={article?.description}
          ogUrl={`https://family-coach.vercel.app/blog/${article?._id}`}
          ogTitle="Ціна консультацій психолога"
          ogDescription={article?.description}
          ogArticle={article?.description}
          ogImage={article?.postImage?.url}
        />
        <Container>
          <div className={styles.article_contentwrapper}>
            <article className={styles.article}>
              <Link className={styles.article_linkGoBack} to={backLinkHref}>
                Повернутись до всіх статтей
              </Link>
              <div className={styles.articletextWrapper}>
                <h1 className="title">{article?.title}</h1>

                <div
                  className=" ql-editor"
                  dangerouslySetInnerHTML={{ __html: article?.post }}
                ></div>
              </div>

              <div className={styles.article_info}>
                <p className={styles.article_date}>
                  {formatDate(article?.createdAt)}
                </p>
                {/* <p className={styles.article_author}>{article.author}</p> */}
                <p className={styles.article_author}>Жанна Барищук</p>
              </div>
            </article>
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
                {posts.map(article => (
                  <SwiperSlide key={article._id}>
                    <Link
                      to={`/blog/${article._id}`}
                      onClick={window.scrollTo(0, 0)}
                    >
                      <div className={styles.swiper_content}>
                        <AdvancedImage
                          className={styles.swiperImg}
                          cldImg={cld
                            .image(article.postImage.public_id)
                            // .resize(Resize.scale().width(349).height(245))
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
