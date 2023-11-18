import Container from '@/components/Container/Container';
import ArrowBack from '@/components/Icons/ArrowBack';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { blogData } from '@/data/blogData.js';
const Article = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log('backLinkHref : ', backLinkHref);
  const { articleId } = useParams();

  const [article, setArticle] = useState({});

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
    <Container>
      {/* <h1>Article</h1> */}
      <Link to={backLinkHref}>
        <ArrowBack />
      </Link>
      <h1>{article.title}</h1>
      <h1>{article.body}</h1>
    </Container>
  );
};

export default Article;
