import Container from '@/components/Container/Container';
import style from './HomePage.module.scss';
import { Link } from 'react-router-dom/dist';

import Instagram from '@/components/Icons/Instagram';
import Phone from '@/components/Icons/Phone';
import Telegram from '@/components/Icons/Telegram';
import Arrow from '@/components/Icons/Arrow';
import Logo from '@/components/Icons/Logo';
import BurgerIcon from '@/components/Icons/BurgerIcon';
import CloseIcon from '@/components/Icons/CloseIcon';

const HomePage = () => {
  return (
    <Container>
      <p className={style.test}> Привіт!Мене звати Жанна Барищук</p>

      <p className={style.test1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius beatae,
        mollitia quos ipsam aut aliquam ratione laborum temporibus odio incidunt
        rerum cupiditate, enim maxime, numquam quia dignissimos? Nobis dolorum
        aliquid quidem autem repellendus accusamus officia blanditiis voluptatem
        similique atque quaerat sequi quis, laboriosam, fugiat cum? Iusto, hic
        tenetur! Eius quae at eveniet, iusto consequuntur laudantium,
        perspiciatis nulla quam quo obcaecati asperiores maiores, fugit ullam
        consectetur reiciendis libero autem architecto vitae corporis iure rerum
        odio laborum. Iusto, ut voluptatum odio nisi provident porro quia
        ducimus veritatis minima dolores accusantium quas, eum pariatur
        doloribus error laborum praesentium quos fugit rem, culpa magnam.
      </p>
      <p className={style.test2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius beatae,
        mollitia quos ipsam aut aliquam ratione laborum temporibus odio incidunt
        rerum cupiditate, enim maxime, numquam quia dignissimos? Nobis dolorum
        aliquid quidem autem repellendus accusamus officia blanditiis voluptatem
        similique atque quaerat sequi quis, laboriosam, fugiat cum? Iusto, hic
        tenetur! Eius quae at eveniet, iusto consequuntur laudantium,
        perspiciatis nulla quam quo obcaecati asperiores maiores, fugit ullam
        consectetur reiciendis libero autem architecto vitae corporis iure rerum
        odio laborum. Iusto, ut voluptatum odio nisi provident porro quia
        ducimus veritatis minima dolores accusantium quas, eum pariatur
        doloribus error laborum praesentium quos fugit rem, culpa magnam.
      </p>
      <div>
        <span>&#169; 2023 Жанна Барищук - всі права захищено </span>
      </div>

      <ul className={style.sosialList}>
        <li>
          <a href="tel:+380672570144">
            <Phone />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/your_familycoach/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Instagram />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/Zh_Bshch"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Telegram />
          </a>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <Arrow />
          </Link>
        </li>
        <li>
          <BurgerIcon />
        </li>
        <li>
          <button>
            <CloseIcon />
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default HomePage;
