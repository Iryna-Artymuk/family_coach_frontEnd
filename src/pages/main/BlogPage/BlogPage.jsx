import { Cloudinary } from '@cloudinary/url-gen';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react';

import 'react-quill/dist/quill.snow.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Arrow from '@/components/Icons/Main/Arrow';
import IconMore from '@/components/Icons/Main/IconMore';
import { useIsLoading } from '@/store/loadingStore';
import useBlogStore from '@/store/blogStore';
import styles from './BlogPage.module.scss';
import Container from '@/components/main/Container/Container';
import Spinner from '@/ui/Spinner/Spinner';

import heroPhoto from '/images/heroPhoto.jpg';
import Seo from '@/components/seo/Seo';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  const [articlePerPage, setArticlePerPage] = useState(0);
  const { getPosts } = useBlogStore();

  const { isLoading, setIsLoading, setLoaded } = useIsLoading();

  const isMaxAmount = articlePerPage >= posts.length - 1;
  const isDesktop = useMediaQuery({ minWidth: 1240 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dmzxbkd8p',
    },
  });

  const viewMore = () => setArticlePerPage(prev => prev + articlePerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading();
        const result = await getPosts();
        console.log('result : ', result);

        setPosts(result.data);
        setLoaded();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [getPosts, setPosts, setIsLoading, setLoaded]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // do things after first render
    if (isMobile) {
      setArticlePerPage(4);
    }
    if (isTablet) {
      setArticlePerPage(6);
    }
    if (isDesktop) {
      setArticlePerPage(12);
    }
  }, [isDesktop, isMobile, isTablet]);

  return (
    <section className={styles.blog}>
      <Seo
        title="Особистий блог психолога Жанни Барищук"
        description="статті  на тему мотивації саморозвитку виховання дітей та підлітків "
        ogUrl="https://family-coach.vercel.app/blog"
        ogTtitle="Блог сучасної психологині  Жанни Барищу"
        ogDescription="статті  на тему мотивації саморозвитку виховання дітей та підлітків "
        ogArticle="статті  на тему мотивації саморозвитку виховання дітей та підлітків "
        ogImage={`https://family-coach.vercel.app${heroPhoto}`}
      />
      {!isLoading ? (
        <Container>
          <div className={styles.blog_wrapper}>
            <h1 className="visuallyHidden">Блог Жанни Барищук</h1>

            {isDesktop && (
              <ul className={styles.blog_list}>
                {posts.slice(0, articlePerPage).map(article => (
                  <li key={article._id} className={styles.blog_listItem}>
                    <Link
                      to={`/blog/${article._id}`}
                      state={{ from: location.pathname }}
                    >
                      <div className={styles.blog_content}>
                        <div className={styles.blog_contentImgwrapper}>
                          <AdvancedImage
                            cldImg={cld
                              .image(article.postImage.public_id)
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
                          <div className={styles.blog_contentOverlay}>
                            <p className={styles.blog_contentOverlayText}>
                              {article.description}
                            </p>
                          </div>
                        </div>

                        <h2 className="title"> {article.title} </h2>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {!isDesktop && (
              <ul className={styles.blog_list}>
                {posts.slice(0, articlePerPage).map(article => (
                  <li key={article._id} className={styles.blog_listItem}>
                    <div className={styles.blog_content}>
                      <div className={styles.blog_contentImgwrapper}>
                        <AdvancedImage
                          cldImg={cld
                            .image(article.postImage.public_id)

                            .roundCorners(byRadius(15))}
                          plugins={
                            ([
                              lazyload({
                                rootMargin: '10px 20px 10px 30px',
                                threshold: 0.25,
                              }),
                            ],
                            // [responsive({ steps: 100 })],
                            [placeholder({ mode: 'blur' })])
                          }
                        />
                        <Link
                          className={styles.blog_contentReadMore}
                          to={`/blog/${article._id}`}
                          state={{ from: location.pathname }}
                        >
                          <span> Читати далі</span>
                          <Arrow />
                        </Link>
                      </div>

                      <div className={styles.blog_contentTextWrapper}>
                        <h2 className="title"> {article.title} </h2>
                        <p className={styles.blog_contentText}>
                          {article.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {!isMaxAmount && (
              <button className="buttonLoadMore" onClick={viewMore}>
                Дивитися Більше
                <IconMore />
              </button>
            )}
          </div>
        </Container>
      ) : (
        <>
          <h2 className="loadingText">
            Зачекайте будь-ласка мої статті завантажуються...
          </h2>
          <Spinner />
        </>
      )}
    </section>
  );
};

export default BlogPage;
