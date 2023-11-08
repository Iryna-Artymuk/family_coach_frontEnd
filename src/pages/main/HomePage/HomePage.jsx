import Container from '@/components/Container/Container';
import style from './HomePage.module.scss';
import { Link } from 'react-router-dom/dist';
const HomePage = () => {
  return (
    <Container>
      <p className={style.test}>family_coach </p>
      <p className={style.test}>Жанна Барищук </p>
      <Link to="/blog">click here </Link>
    </Container>
  );
};

export default HomePage;
