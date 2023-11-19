import Container from '@/components/Container/Container';

import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { blogData } from '@/data/blogData.js';
import styles from './BlogPage.module.scss';

const BlogPage = () => {
  // const location = useLocation();
  // console.log('location: ', location);
  // const backLinkHref = location.state?.from ?? '/';
  // const backLinkHref = location.pathname ?? '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.blog}>
      <div className={styles.blog_wrapper}>
        <Container>
          <h1 className="visuallyHidden">Блог Жанни Барищук</h1>

          <ul className={styles.blog_list}>
            {blogData.map(article => (
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
        </Container>
      </div>
    </section>
  );
};

export default BlogPage;
