import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import Container from '@/components/Container/Container';

const Header = () => {
  return (
    <header>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
      </Container>
    </header>
  );
};

export default Header;
