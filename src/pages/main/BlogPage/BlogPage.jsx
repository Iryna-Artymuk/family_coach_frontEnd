import Container from '@/components/Container/Container';

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { blogData } from '@/data/blogData.js';
import styles from './BlogPage.module.scss';
import { useMediaQuery } from 'react-responsive';
import Arrow from '@/components/Icons/Arrow';

const BlogPage = () => {
  const location = useLocation();
  console.log('location: ', location);

  const [articlePerPage, setArticlePerPage] = useState(0);
  console.log('articlePerPage: ', articlePerPage);
  const isMaxAmount = articlePerPage >= blogData.length - 1;
  const isDesktop = useMediaQuery({ minWidth: 1240 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const viewMore = () => setArticlePerPage(prev => prev + articlePerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
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
      <Container>
        <div className={styles.blog_wrapper}>
          <h1 className="visuallyHidden">Блог Жанни Барищук</h1>

          {isDesktop && (
            <ul className={styles.blog_list}>
              {blogData.slice(0, articlePerPage).map(article => (
                <li key={article.id} className={styles.blog_listItem}>
                  <Link
                    to={`/blog/${article.id}`}
                    state={{ from: location.pathname }}
                  >
                    <div className={styles.blog_content}>
                      <div className={styles.blog_contentImgwrapper}>
                        <img
                          src={article.url}
                          alt=""
                          className={styles.blog_contentImg}
                        />
                        <div className={styles.blog_contentOverlay}>
                          <p className={styles.blog_contentText}>
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
          {(isMobile || isTablet) && (
            <ul className={styles.blog_list}>
              {blogData.slice(0, articlePerPage).map(article => (
                <li key={article.id} className={styles.blog_listItem}>
                  <div className={styles.blog_content}>
                    <div className={styles.blog_contentImgwrapper}>
                      <img
                        src={article.url}
                        alt=""
                        className={styles.blog_contentImg}
                      />
                      <Link
                        className={styles.blog_contentReadMore}
                        to={`/blog/${article.id}`}
                        state={{ from: location.pathname }}
                      >
                        <span> Читати далі</span>
                        <Arrow />
                      </Link>
                    </div>

                    <div className={styles.blog_contentTextWrapper}>
                      <h2 className="title"> {article.title} </h2>
                      <p>{article.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {!isMaxAmount && (
            <button className={styles.buttonViewMore} onClick={viewMore}>
              Дивитися Більше
              <div className={styles.iconMore}>
                <span></span>
              </div>
            </button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default BlogPage;
