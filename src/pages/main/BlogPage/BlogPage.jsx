import Container from '@/components/Container/Container';
import ArrowBack from '@/components/Icons/ArrowBack';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { blogData } from '@/data/blogData.js';
const BlogPage = () => {
  const location = useLocation();
  console.log('location: ', location);
  const backLinkHref = location.state?.from ?? '/';
  // const backLinkHref = location.pathname ?? '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      {/* <h1>Blog</h1> */}
      <Link to={backLinkHref}>
        <ArrowBack />
      </Link>
      <ul
        style={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 30,
        }}
      >
        {blogData.map(article => (
          <Link
            key={article.id}
            to={`/blog/${article.id}`}
            state={{ from: location.pathname }}
          >
            <li
              style={{
                width: 350,
                height: 450,

                padding: 5,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <img src={article.url} width="350" height="350" alt="" />
                <h2> {article.title} </h2>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </Container>
  );
};

export default BlogPage;
