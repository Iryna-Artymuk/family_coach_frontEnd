import Container from '@/components/Container/Container';
import style from './HomePage.module.scss';
import { Link } from 'react-router-dom/dist';
const HomePage = () => {
  return (
    <Container>
      <p className={style.test}> Привіт!Мене звати Жанна Барищук</p>
      <p className={style.test}> Hi! My name is Zhanna Baryshchuk</p>
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
      <Link className={style.test4} to="/blog">
        click here
      </Link>
    </Container>
  );
};

export default HomePage;
