import Container from '@/components/Container/Container';
import ArrowBack from '@/components/Icons/ArrowBack';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const QualificationPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <h1>Qualification</h1>
      <Link to={backLinkHref}>
        <ArrowBack />
      </Link>
    </Container>
  );
};

export default QualificationPage;
