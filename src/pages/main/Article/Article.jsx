import Container from '@/components/Container/Container';
import ArrowBack from '@/components/Icons/ArrowBack';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Article = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log('backLinkHref: ', backLinkHref);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <h1>Article</h1>
      <Link to={backLinkHref}>
        <ArrowBack />
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
        soluta numquam in rem nam quos quis, et odit laborum quo itaque odio
        nesciunt dolorem illum totam nobis delectus eius molestiae ex officiis.
        Facilis libero nulla consequuntur saepe laudantium molestiae consectetur
        possimus sed, eius odio, asperiores itaque ullam similique corrupti
        tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
        saepe? Dolores eius quae rerum est necessitatibus iure quam
        voluptatibus, fugit tempora atque voluptatem perspiciatis minus aperiam
        adipisci ullam amet optio eveniet voluptates ab eum sed corporis
        sapiente. Perspiciatis fuga quam, quis, quibusdam veniam voluptate
        quidem enim nesciunt eius deserunt, officiis ab! Architecto et vitae
        expedita aut consectetur praesentium pariatur dolor nisi ullam
        distinctio nesciunt, dolorum temporibus eum molestias? A officiis quod
        harum incidunt ipsam autem modi recusandae perferendis possimus? Ducimus
        non, laboriosam est odio voluptate voluptates laudantium optio molestiae
        maiores explicabo nulla quae suscipit dicta libero totam fugiat nostrum
        repellendus corrupti ipsum eligendi vel iusto. Corporis vero, expedita
        ullam doloremque itaque labore dolorum aliquid asperiores aperiam
        architecto! Voluptas necessitatibus nemo quae temporibus enim laboriosam
        suscipit numquam modi ipsa culpa similique eveniet deserunt repellendus
        totam non, corporis ea omnis odio natus tempore voluptatibus ducimus?
        Numquam eius mollitia repellendus sint totam quae ipsam expedita rem
        iusto illo ut unde nisi quos ipsa animi ad facilis modi corporis cumque,
        harum reprehenderit neque officiis asperiores. Cum aspernatur mollitia
        accusamus ratione repudiandae eos vel rerum impedit excepturi a
        laboriosam at saepe aperiam, quia doloribus, est sit architecto soluta.
        Amet animi voluptatibus enim ab laboriosam? Repellat.
      </p>
    </Container>
  );
};

export default Article;
