import Container from '@/components/Container/Container';
import { useEffect } from 'react';

const QualificationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <h1>Qualification</h1>
    </Container>
  );
};

export default QualificationPage;
