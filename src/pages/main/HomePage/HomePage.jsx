import { useEffect } from 'react';
import style from './HomePage.module.scss';

import Container from '@/components/Container/Container';

const HomePage = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <Container>
      <div>
        <p className={style.test}> Привіт!Мене звати Жанна Барищук</p>

        <p className={style.test1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          obcaecati dicta. Repudiandae inventore assumenda beatae sunt eius vero
          totam facilis a quae iure nobis excepturi nesciunt, corporis quibusdam
          illo, deleniti nostrum, ipsam natus dignissimos ea quod. Vero soluta
          exercitationem voluptas dolore qui beatae non perspiciatis ex ipsa!
          Error ducimus exercitationem minus deserunt tempore, deleniti,
          suscipit magnam aperiam voluptas fugiat ratione adipisci, illo aliquam
          repellendus quidem sunt id mollitia eius quo. Provident itaque nostrum
          saepe odio, incidunt blanditiis. Odit vitae itaque nisi quos,
          recusandae velit iure ab non amet voluptates officiis sit quae
          voluptatum quaerat ducimus obcaecati sapiente accusamus vel nam ipsum
          dignissimos in suscipit? Est mollitia voluptatem in asperiores,
          repudiandae nostrum id similique harum molestiae, vitae minus quis
          saepe provident ipsam molestias exercitationem! Totam doloremque
          tenetur, quaerat esse possimus repudiandae porro necessitatibus libero
          fugiat maiores sint aut omnis mollitia dolor dolorem harum deleniti i
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          incidunt iusto vel culpa tempora quibusdam iste cumque voluptates a
          porro quis iure molestiae, consequuntur quisquam reprehenderit
          repudiandae similique nihil perspiciatis consequatur et amet hic
          recusandae non deleniti! Laboriosam, alias itaque nisi fuga quas
          blanditiis. Aut tempora expedita corporis reiciendis beatae! Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Nam vero, sint
          reprehenderit perferendis eaque accusantium dolor magnam architecto
          magni minus facilis quia cumque repellendus fuga possimus, adipisci
          veniam dolores molestiae nulla. Laboriosam accusantium quisquam
          expedita hic odio reprehenderit ea asperiores blanditiis molestiae
          obcaecati deleniti explicabo nemo ipsum, beatae, aperiam sapiente
          neque voluptatem, officiis fugiat quod saepe fuga impedit unde. Aut ad
          placeat sapiente eum ex autem atque soluta ut unde magnam
          reprehenderit fuga maxime animi iusto earum rem facilis, voluptatibus
          voluptate, ullam esse? Inventore asperiores quasi, praesentium esse
          architecto nemo vitae possimus, animi nostrum dolorum consectetur
          quisquam! Soluta, iste provident.
        </p>
      </div>

      {/* <ul >
       

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
      </ul> */}
    </Container>
  );
};

export default HomePage;
