import Container from '@/components/Container/Container';
import { useEffect } from 'react';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <h1>Blog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
        soluta numquam in rem nam quos quis, et odit laborum quo itaque odio
        nesciunt dolorem illum totam nobis delectus eius molestiae ex officiis.
        Facilis libero nulla consequuntur saepe laudantium molestiae consectetur
        possimus sed, eius odio, asperiores itaque ullam similique corrupti
        tenetur.
      </p>
    </Container>
  );
};

export default BlogPage;
