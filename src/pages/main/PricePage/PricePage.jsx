import Container from '@/components/Container/Container';
import { useEffect } from 'react';

const PricePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <h1>Price </h1>
    </Container>
  );
};

export default PricePage;
