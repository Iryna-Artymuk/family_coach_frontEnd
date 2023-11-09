import style from './HomePage.module.scss';


import Container from '@/components/Container/Container';


const HomePage = () => {
  return (
    <Container>
      <p className={style.test}> Привіт!Мене звати Жанна Барищук</p>

      <p className={style.test1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, obcaecati
        dicta. Repudiandae inventore assumenda beatae sunt eius vero totam
        facilis a quae iure nobis excepturi nesciunt, corporis quibusdam illo,
        deleniti nostrum, ipsam natus dignissimos ea quod. Vero soluta
        exercitationem voluptas dolore qui beatae non perspiciatis ex ipsa!
        Error ducimus exercitationem minus deserunt tempore, deleniti, suscipit
        magnam aperiam voluptas fugiat ratione adipisci, illo aliquam
        repellendus quidem sunt id mollitia eius quo. Provident itaque nostrum
        saepe odio, incidunt blanditiis. Odit vitae itaque nisi quos, recusandae
        velit iure ab non amet voluptates officiis sit quae voluptatum quaerat
        ducimus obcaecati sapiente accusamus vel nam ipsum dignissimos in
        suscipit? Est mollitia voluptatem in asperiores, repudiandae nostrum id
        similique harum molestiae, vitae minus quis saepe provident ipsam
        molestias exercitationem! Totam doloremque tenetur, quaerat esse
        possimus repudiandae porro necessitatibus libero fugiat maiores sint aut
        omnis mollitia dolor dolorem harum deleniti i
      </p>

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
